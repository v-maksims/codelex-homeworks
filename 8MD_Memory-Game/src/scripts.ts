import _, { indexOf } from 'lodash';
import lodash from 'lodash'
import { cli } from 'webpack';

// Buttons

const btnStart = document.querySelector('.btn__start-game'); // Start button
const btnRestart = document.querySelector('.btn__reset-game'); // Restart button

// Cards list without class 'card-id'
const cardsList = document.querySelectorAll<HTMLElement>('.card__item')

// Cards color with [0-1, 2-3, 4-5, default]
const cardColors = ['#D8AE77', '#6B633E', '#CBC195', 'rgb(32, 32, 32)']

// Game variables

let moveCount = 0; // Move count
let previousCard: HTMLElement | null = null; // The previous card to compare with the second selected one
let previous: string[] = []; // Array with two cards for background comparison
let clickTime = 0; // Click times on button start it is only 0 or 1
let cardPair = 0; // Counter for counting pairs (for an even number of cards)



// Functions

// Start game, the number of cards is counted athen the numbers of the cards are mixed (id). And at the end, a class is added to each card with its own indicator (card-id)

const initializeGame = () => {
    let countOfCards = [];

    for (let i = 0; i < cardsList.length; i++) {
        countOfCards.push(i)
    }

    const cardNumberShuffle = _.shuffle(countOfCards);
    
    for (let i = 0; i < cardsList.length; i++) {
        cardsList[i].style.display = 'block';
        cardsList[i].style.backgroundColor = cardColors[cardColors.length - 1];
        cardsList[i].classList.add(`card-${cardNumberShuffle[i]}`);
    }
}

const resetCards = () => {
    for(let i = 0; i < cardsList.length; i++){
        for(let j = 0;j < cardsList.length;j++){
        cardsList[i].classList.remove(`card-${[j]}`);
        }
    }
}


// A function that takes the index of the card as an argument.It checks what class the card has and, when clicked, set background color from an array with background colors.
// This is followed by a check if the array where there should be 2 background colors, whether it has a length of 1 or 0 (because it will be checked later on an array with a length of 1, 
// and not with a length of 2), if 0, then it makes the next check if there is a value in which stores the previously selected card, if there is no card,
// then a new value will be added to the variable and the background color of the card will be added to the array where there can be 2 cards for comparison
// The final game check with cards that checks that the length of the array is 2 and if so, then the match of the background colors of 2 cards, if so then the card pair is added by 1 (for the next check) 
// and the values in previousCard , previous are default
// if the cards are not equal, then after 1 second the background for the cards returns to the standard one, and a little later the values in previousCard , previous are default.
// Finally movecount +1
const handleCardClick = (index: number) => {

    const selected = cardsList[index].classList[1];

    if (selected === 'card-0' || selected === 'card-1') {
        cardsList[index].style.backgroundColor = cardColors[0];
    } else if (selected === 'card-2' || selected === 'card-3') {
        cardsList[index].style.backgroundColor = cardColors[1];
    } else if (selected === 'card-4' || selected === 'card-5') {
        cardsList[index].style.backgroundColor = cardColors[2];
    }

    if (previous.length <= 1) {
        if (!previousCard) {
            previousCard = cardsList[index]
        }
        previous.push(cardsList[index].style.backgroundColor)
    }
    if (previous.length === 2) {
        if (previous[0] === previous[1]) {
            previousCard = null
            previous = []
            cardPair++
        } else if (previous[0] !== previous[1]) {
            setTimeout(() => {
                cardsList[index].style.backgroundColor = cardColors[cardColors.length - 1];
                previousCard.style.backgroundColor = cardColors[cardColors.length - 1];
            }, 500)
            setTimeout(() => {
                previousCard = null
                previous = []
            }, 600)
        }

    }
    moveCount++;
}

const displayWinner = () => {
    if (cardPair === cardsList.length / 2) {
        setTimeout(() => {
            window.alert('Win')
        }, 200)
    }
}

const resetGame = () => {
    moveCount = 0;
    previousCard = null; 
    previous = [];
    cardPair = 0;
    for(let card of cardsList){
        card.style.backgroundColor = cardColors[cardColors.length - 1]
    };
}

//Events

// When you press the start button, it checks if it was pressed, if not, the game starts
btnStart.addEventListener('click', () => {
    if (clickTime === 0) {
        initializeGame();
        clickTime++;
    }
})

// Event listener for card by index
for (let i = 0; i < cardsList.length; i++) {
    cardsList[i].addEventListener('click', () => {
        handleCardClick(i);
        displayWinner()
    })
}

btnRestart.addEventListener('click', () => {
    resetCards();
    resetGame();
    initializeGame()
})




