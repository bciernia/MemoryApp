import {switchClicking, createH1, createParagraph} from "../../design-system/core/core.js";
import {clearDiv} from "../../design-system/core/core.js";

let gridSize = 16;
let cardPairsChecked = 0;

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

export const shouldEndGame = (cardsContainer) => {
    console.log(gridSize + " " + cardPairsChecked)
    if(gridSize === cardPairsChecked){
        clearDiv(cardsContainer);
        const h1 = createH1('YOU WON!', ['centered-text']);
        const p = createParagraph('Congratulation, you won!', ['centered-text']);

        cardsContainer.classList.toggle('flex-direction-col');

        cardsContainer.appendChild(h1);
        cardsContainer.appendChild(p);
    }
}

export const areTwoCardsChosen = (gameArray, cardsContainer, chosenCards) => {
    switchClicking(cardsContainer);
    const cardsAreSame = areTwoCardsSame(chosenCards);
    const images = Array.from(cardsContainer.getElementsByTagName('img'));

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