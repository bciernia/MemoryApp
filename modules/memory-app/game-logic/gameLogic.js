import {switchClicking} from "../../design-system/core/core.js";

let cardPairsToCheck = 0;

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

export const areTwoCardsChosen = (gameArray, cardsContainer, chosenCards) => {
    switchClicking(cardsContainer);
    const cardsAreSame = areTwoCardsSame(chosenCards);
    const images = Array.from(cardsContainer.getElementsByTagName('img'));

    if (cardsAreSame) {
        switchClicking(cardsContainer);
        chosenCards.length = 0;
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