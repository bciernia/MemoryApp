import {switchClicking} from "../../design-system/core/core.js";
import {clearDiv} from "../../design-system/core/core.js";

let gridSize = 16;
let cardPairsChecked = 0;

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

//TODO game ends before last card is turned
export const shouldEndGame = (cardsContainer) => {
    console.log(gridSize + " " + cardPairsChecked)
    if(gridSize === cardPairsChecked){
        alert('Game end');
        clearDiv(cardsContainer);
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