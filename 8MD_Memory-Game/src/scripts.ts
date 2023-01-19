import _, { indexOf } from 'lodash';
import lodash from 'lodash';
import { cli } from 'webpack';
import swal from 'sweetalert';

// Buttons
const btnStart = document.querySelector('.btn__start-game');
const btnReset = document.querySelector('.btn__reset-game');
const btnGameModes = document.querySelectorAll('.js-game-field');
const btnStartReset = document.querySelector('.btn-game');
const btnModeList = document.querySelector('.btn-mode');

// Game texts
const moveCounter = document.querySelector('.js-move-counter');
const winCounter = document.querySelector('.js-win-counter');
const bottomSection = document.querySelector('.bottom-wrap');
const timerElement = document.querySelector('.js-timer');

// Card list for creating cards
const gameField = document.querySelector('.card__list');
// eslint-disable-next-line no-undef
let cardList: NodeListOf<HTMLElement> = document.querySelectorAll('.card');

// Variables

// Cards variables
const cardColors = ['rgb(216, 174, 119)', 'rgb(107, 99, 62)', 'rgb(203, 193, 149)', 'rgb(52, 42, 105)', 'rgb(239, 46, 114)', 'rgb(0, 86, 153)', 'rgb(32, 32, 32)'];
const [color1, color2, color3, color4, color5, color6, colorBG] = cardColors;
const cardIDs: number[] = []; // Total cards count to randomize

let randomCardIDs: number[]; // Randomized cards ID for colors
let previousCard: HTMLElement | null = null; // previous selected card (1)
let previousCards: string[] = []; // selected cards (2)
let usedCardClasses: string[] = []; // Used cards to make cards that were already unclickable

// Win check variables
let pairCount = 0; // Pair for check win
let win = false; // check if win True or False

// Timer variables
let timer: NodeJS.Timer; // timer
let seconds = 0; // count seconds
let minutes = 0; // count minutes

let winTimes = 0;
let gameFieldCount: number;
let moveCount = 0;

// Function for loop gamefield push card count and randomize
const pushRandomNums = () => {
  for (let j = 0; j < gameFieldCount; j += 1) {
    cardIDs.push(j);
  }
  randomCardIDs = _.shuffle(cardIDs);
};

// Loop for gameField
for (let i = 0; i < btnGameModes.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  btnGameModes[i].addEventListener('click', () => {
    btnModeList.classList.add('btn-mode--disabled');
    btnStartReset.classList.remove('btn-game--disabled');
    if (btnGameModes[i].classList[1] === 'btn__mode-3x2') {
      gameFieldCount = 6;
      pushRandomNums();
    } else {
      gameFieldCount = 12;
      pushRandomNums();
    }
  });
}

// Functions

// Time counter initialization
const timeCounter = () => {
  timer = setInterval(() => {
    if (seconds < 59) {
      seconds += 1;
    } else if (seconds === 59) {
      seconds = 0;
      minutes += 1;
    }
    timerElement.innerHTML = `${minutes >= 10 ? minutes : `0${minutes}`} : ${seconds >= 10 ? seconds : `0${seconds}`}`;
  }, 1000);
};

// After selecting 2 cards, variables with past card values clear
const resetPrevCards = () => {
  previousCard = null;
  previousCards = [];
};

// Clicking on the card does the following:
const handleCardClick = (index: number) => {
  const selected = cardList[index].classList[1]; // In order not to repeat in if | else if

  // Compares with the class of the pressed card, if it matches, it shows the desired color
  if (selected === 'card-0' || selected === 'card-1') {
    cardList[index].style.backgroundColor = color1;
  } else if (selected === 'card-2' || selected === 'card-3') {
    cardList[index].style.backgroundColor = color2;
  } else if (selected === 'card-4' || selected === 'card-5') {
    cardList[index].style.backgroundColor = color3;
  } else if (selected === 'card-6' || selected === 'card-7') {
    cardList[index].style.backgroundColor = color4;
  } else if (selected === 'card-8' || selected === 'card-9') {
    cardList[index].style.backgroundColor = color5;
  } else if (selected === 'card-10' || selected === 'card-11') {
    cardList[index].style.backgroundColor = color6;
  }

  // Comparison are 2 cards identical

  // If first card selected, then the card is added to the
  // variable and pushed (Color ex. rgb(0,0,0)) into the array for 2 cards for further comparison
  if (previousCards.length <= 1) {
    if (!previousCard) {
      previousCard = cardList[index];
    }
    previousCards.push(cardList[index].style.backgroundColor);
  }

  // If 2 cards were selected then:
  if (previousCards.length === 2) {
    // Checked are 2 colors the same
    if (previousCards[0] === previousCards[1]) {
      // Push used card (ex. card-0 (card-id))
      usedCardClasses.push(previousCard.classList[1], cardList[index].classList[1]);
      resetPrevCards();
      pairCount += 1; // Pair count to check if all cards are open
    } else if (previousCards[0] !== previousCards[1]) {
      setTimeout(() => { // Timeout for corect work
        cardList[index].style.backgroundColor = colorBG; // reset card BG
        previousCard.style.backgroundColor = colorBG; // reset card BG
      }, 250);
      setTimeout(() => { // Timeout for corect work
        resetPrevCards();
      }, 260);
    }
  }
};

// Function for starting game
const initializeGame = () => {
  for (let i = 0; i < gameFieldCount; i += 1) {
    gameField.innerHTML += '<div class="card"></div>'; // Create cards
    cardList = document.querySelectorAll('.card'); // Add class for card, to select
    cardList[i].classList.add(`card-${randomCardIDs[i]}`); // Add class to card for colors
    cardList[i].style.backgroundColor = colorBG; // Set card BG color
  }
};

// Function for remove old card classes (ex. card-id);
const removeOldCardsClassAndAddNew = () => {
  randomCardIDs = _.shuffle(cardIDs);
  for (let i = 0; i < gameFieldCount; i += 1) {
    for (let j = 0; j < gameFieldCount; j += 1) {
      cardList[i].classList.remove(`card-${[j]}`);
    }

    cardList[i].classList.add(`card-${randomCardIDs[i]}`);
    cardList[i].style.backgroundColor = colorBG;
  }
};

// function to check if all the cards have been collected
const checkIfWin = () => {
  if (pairCount === gameFieldCount / 2) {
    swal({
      title: 'Good job!',
      text: 'You collected all the cards!\n You can start new game and improve!',
      icon: 'success',
    });
    if (localStorage.winsTime) {
      winTimes = +localStorage.winsTime;
      winCounter.innerHTML = `Win count: ${localStorage.winsTime}`;
    }
    winTimes += 1;
    localStorage.winsTime = winTimes;
    winCounter.innerHTML = `Win count: ${winTimes}`;
    win = true;
    clearInterval(timer);
  }
};

// Function that looks at which card was clicked
const game = () => {
  for (let i = 0; i < cardList.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    cardList[i].addEventListener('click', () => {
      // Checking if the card has already been flipped
      if (!usedCardClasses.includes(cardList[i].classList[1])) {
        // Checking if the game is over
        if (!win) {
          handleCardClick(i);
          moveCount += 1;
          moveCounter.innerHTML = `Move count: ${moveCount}`;
          checkIfWin();
        }
      }
    });
  }
};

// Reset variables for new game
const resetGameVariables = () => {
  resetPrevCards();
  moveCount = 0;
  randomCardIDs = [];
  pairCount = 0;
  win = false;
  usedCardClasses = [];
  seconds = 0;
  minutes = 0;
};

// When click on start btn
btnStart.addEventListener('click', () => {
  btnStart.classList.add('btn__start-game--disabled'); // Hide start btn
  btnReset.classList.remove('btn__reset-game--disabled'); // Show reset btn
  bottomSection.classList.remove('bottom--disabled'); // Show information (move count, timer, wins)

  timeCounter(); // Start timer

  if (localStorage.winsTime) {
    winCounter.innerHTML = `Win total: ${localStorage.winsTime}`;
  }

  initializeGame(); // Start game
  game(); // Checking which card was clicked
});

// When click on reset, reset game
btnReset.addEventListener('click', () => {
  removeOldCardsClassAndAddNew(); // Reset card-id
  resetGameVariables(); // Reset variables
  clearInterval(timer); // Reset timer
  timerElement.innerHTML = '00 : 00'; // Reset timer display
  timeCounter(); // Start timer
  moveCounter.innerHTML = `Move count: ${moveCount}`; // New move counter
});
