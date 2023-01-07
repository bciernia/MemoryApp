import {switchClicking, createH1, createParagraph} from "../../design-system/core/core.js";
import {clearDiv} from "../../design-system/core/core.js";

const attemptsCounterParagraph = document.querySelector('.attempt-counter');

let gridSize = 16;
let cardPairsChecked = 0;
let attemptCounter = 0;

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

export const shouldEndGame = (cardsContainer) => {
    console.log(gridSize + " " + cardPairsChecked)
    if(gridSize === cardPairsChecked){
        clearDiv(cardsContainer);
        const h1 = createH1('YOU WON!', ['centered-text']);
        const p = createParagraph(`You tried ${attemptCounter} times`, ['centered-text']);

        attemptsCounterParagraph.style.display='none';

        cardsContainer.classList.toggle('flex-direction-col');

        cardsContainer.appendChild(h1);
        cardsContainer.appendChild(p);
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
        for (let i = 0; i < images.length; i++) {
            if (((i === gameArray.indexOf(chosenCards[0]))) || (i === gameArray.indexOf(chosenCards[1]))) {
                images[i].classList.toggle('prevent-clicking');
            }
        }
        chosenCards.length = 0;
        cardPairsChecked += 2;
    } else {
        setTimeout(() => {
            for (let i = 0; i < images.length; i++) {
                if (((i === gameArray.indexOf(chosenCards[0]))) || (i === gameArray.indexOf(chosenCards[1]))) {
                    images[i].src = chosenCards[0].cardBack;
                    gameArray[i].reverseCard();
                }
            }
            switchClicking(cardsContainer);
            chosenCards.length = 0;
        }, 1000);
    }

    return chosenCards.length;
}