import {switchClicking} from "../../design-system/core/core.js";

const areTwoCardsSame = cards => {
    return (cards[0].cardFront === cards[1].cardFront);
}

export const areTwoCardsChosen = (cardsContainer, chosenCards) => {
    switchClicking(cardsContainer);
    const cardsAreSame = areTwoCardsSame(chosenCards);

    if (cardsAreSame) {
        switchClicking(cardsContainer);
        console.log('same');
    } else {
        console.log('not same');
        setTimeout(() => {
            chosenCards.forEach(card => card.reverseCard());
            switchClicking(cardsContainer);
        }, 2000);
    }
}