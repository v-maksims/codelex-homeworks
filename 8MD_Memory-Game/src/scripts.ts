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
const moveCounter = document.querySelector('.js-move-counter');
const winCounter = document.querySelector('.js-win-counter');
const bottomSection = document.querySelector('.bottom-wrap');
const timerElement = document.querySelector('.js-timer');

// Card list for creating cards
const gameField = document.querySelector('.card__list');
// eslint-disable-next-line no-undef
let cardList: NodeListOf<HTMLElement> = document.querySelectorAll('.card');

// Variables
const cardColors = ['rgb(216, 174, 119)', 'rgb(107, 99, 62)', 'rgb(203, 193, 149)', 'rgb(52, 42, 105)', 'rgb(239, 46, 114)', 'rgb(0, 86, 153)', 'rgb(32, 32, 32)'];
const [color1, color2, color3, color4, color5, color6, colorBG] = cardColors;
const cardIDs: number[] = [];

let gameFieldCount: number;
let startBtnClick = 0;
let randomCardIDs: number[];
let previousCard: HTMLElement | null = null;
let previousCards: string[] = [];
let moveCount = 0;
let pairCount = 0;
let usedCardClasses: string[] = [];
let winTimes = 0;
let win = false;
let timer: NodeJS.Timer;
let seconds = 0;
let minutes = 0;

// Loop for gameField
for (let i = 0; i < btnGameModes.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  btnGameModes[i].addEventListener('click', () => {
    btnModeList.classList.add('btn-mode--disabled');
    btnStartReset.classList.remove('btn-game--disabled');
    if (btnGameModes[i].classList[1] === 'btn__mode-3x2') {
      gameFieldCount = 6;
      for (let j = 0; j < gameFieldCount; j += 1) {
        cardIDs.push(j);
      }
      randomCardIDs = _.shuffle(cardIDs);
    } else {
      gameFieldCount = 12;
      for (let j = 0; j < gameFieldCount; j += 1) {
        cardIDs.push(j);
      }
      randomCardIDs = _.shuffle(cardIDs);
    }
  });
}

// Functions

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

const handleCardClick = (index: number) => {
  const selected = cardList[index].classList[1];

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

  if (previousCards.length <= 1) {
    if (!previousCard) {
      previousCard = cardList[index];
    }
    previousCards.push(cardList[index].style.backgroundColor);
  }
  if (previousCards.length === 2) {
    if (previousCards[0] === previousCards[1]) {
      usedCardClasses.push(previousCard.classList[1], cardList[index].classList[1]);
      previousCard = null;
      previousCards = [];
      pairCount += 1;
    } else if (previousCards[0] !== previousCards[1]) {
      setTimeout(() => {
        cardList[index].style.backgroundColor = colorBG;
        previousCard.style.backgroundColor = colorBG;
      }, 250);
      setTimeout(() => {
        previousCard = null;
        previousCards = [];
      }, 251);
    }
  }
};

const initializeGame = () => {
  for (let i = 0; i < gameFieldCount; i += 1) {
    gameField.innerHTML += '<div class="card"></div>';
    cardList = document.querySelectorAll('.card');
    cardList[i].classList.add(`card-${randomCardIDs[i]}`);
    cardList[i].style.backgroundColor = colorBG;
  }
};

const removeOldCardsClass = () => {
  for (let i = 0; i < gameFieldCount; i += 1) {
    for (let j = 0; j < gameFieldCount; j += 1) {
      cardList[i].classList.remove(`card-${[j]}`);
    }
  }
};

const addNewCardsClass = () => {
  randomCardIDs = _.shuffle(cardIDs);
  for (let i = 0; i < gameFieldCount; i += 1) {
    cardList[i].classList.add(`card-${randomCardIDs[i]}`);
    cardList[i].style.backgroundColor = colorBG;
  }
};

const checkIfWin = () => {
  if (pairCount === gameFieldCount / 2) {
    swal({
      title: 'Good job!',
      text: 'You collected all the cards! You can start over and improve!',
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

const game = () => {
  for (let i = 0; i < cardList.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    cardList[i].addEventListener('click', () => {
      if (!usedCardClasses.includes(cardList[i].classList[1])) {
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

const resetGameVariables = () => {
  previousCard = null;
  previousCards = [];
  moveCount = 0;
  randomCardIDs = [];
  pairCount = 0;
  win = false;
  usedCardClasses = [];
  seconds = 0;
  minutes = 0;
};

btnStart.addEventListener('click', () => {
  btnStart.classList.add('btn__start-game--disabled');
  btnReset.classList.remove('btn__reset-game--disabled');
  bottomSection.classList.remove('bottom--disabled');

  timeCounter();

  if (localStorage.winsTime) {
    winCounter.innerHTML = `Win total: ${localStorage.winsTime}`;
  }

  if (!startBtnClick) {
    initializeGame();
    game();
    startBtnClick = 1;
  }
});

btnReset.addEventListener('click', () => {
  removeOldCardsClass();
  addNewCardsClass();
  resetGameVariables();
  timerElement.innerHTML = '00 : 00';
  timeCounter();
  moveCounter.innerHTML = `Move count: ${moveCount}`;
});
