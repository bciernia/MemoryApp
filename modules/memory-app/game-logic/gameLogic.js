export const areTwoCardsChosen = cardsGrid => {
    let reversedCardsNumber = 0;

    cardsGrid.forEach(card => {
        if(card.currentImg !== card.cardBack) reversedCardsNumber++;
    })

    if(reversedCardsNumber === 2){
        console.log('stop');
    }
}