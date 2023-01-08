import {switchClicking} from "../../design-system/core/core.js";
import {clearDiv} from "../../design-system/core/core.js";
import {showMessage} from "../../design-system/messages/messages.js";

const attemptsCounterParagraph = document.querySelector('.attempt-counter');

let gridSize = 16;
let cardPairsChecked = 14;
let attemptCounter = 0;

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

export const shouldEndGame = (cardsContainer) => {
    console.log(gridSize + " " + cardPairsChecked)
    if (gridSize === cardPairsChecked) {
        clearDiv(cardsContainer);
        attemptsCounterParagraph.style.display = 'none';

        showMessage(cardsContainer, 'You won!',
            `You tried ${attemptCounter} times`);
    }
}

export const areTwoCardsChosen = (gameArray, cardsContainer, chosenCards) => {
    const cardsAreSame = areTwoCardsSame(chosenCards);
    const images = Array.from(cardsContainer.getElementsByTagName('img'));

    switchClicking(cardsContainer);
    attemptCounter++;
    attemptsCounterParagraph.textContent = `Number of tries: ${attemptCounter}`;

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