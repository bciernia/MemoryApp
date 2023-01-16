import {switchClicking} from "../../design-system/core/core.js";
import {clearDiv} from "../../design-system/core/core.js";
import {showMessage} from "../../design-system/messages/messages.js";
import {resetTimer, returnTime} from "../../design-system/timer/timer.js";
import {addNewResultToRankingArray} from "../../design-system/ranking/ranking.js";

const attemptsCounterParagraph = document.querySelector('.attempt-counter');
const newGameBtn = document.querySelector('.btn-new-game');
const playerName = document.querySelector('#player-name');

let gridSize = 16;
let cardPairsChecked = 0;
let attemptCounter = 0;

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

export const shouldEndGame = (cardsContainer, timerId) => {
    if (gridSize === cardPairsChecked) {
        clearDiv(cardsContainer);
        addNewResultToRankingArray(playerName.value, returnTime());
        resetTimer(timerId);
        cardPairsChecked = 14;
        attemptsCounterParagraph.style.display = 'none';
        newGameBtn.style.display = 'block';
        playerName.style.display = 'block';
        showMessage(cardsContainer, 'You won!',
            `You tried ${attemptCounter} times!`);
        attemptCounter = 0;
    }
}

export const areTwoCardsChosen = (gameArray, cardsContainer, chosenCards) => {
    const cardsAreSame = areTwoCardsSame(chosenCards);
    const images = Array.from(cardsContainer.getElementsByTagName('img'));

    switchClicking(cardsContainer);
    attemptCounter++;

    if (cardsAreSame) {
        switchClicking(cardsContainer);
        chosenCards.length = 0;
        cardPairsChecked += 2;
    } else {
        setTimeout(() => {
            for (let i = 0; i < images.length; i++) {
                if (((i === gameArray.indexOf(chosenCards[0]))) || (i === gameArray.indexOf(chosenCards[1]))) {
                    images[i].src = chosenCards[0].cardBack;
                    images[i].classList.toggle('prevent-clicking');
                    gameArray[i].reverseCard();
                }
            }
            switchClicking(cardsContainer);
            chosenCards.length = 0;
        }, 1000);
    }

    return chosenCards.length;
}