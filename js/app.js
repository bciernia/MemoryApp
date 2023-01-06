import {Card} from "../modules/memory-app/card/card.js"

const cardsContainer = document.querySelector('.cards-container');

const photoArray = [];

for(let i=1;i<9;i++){
    photoArray.push(`images/memory_images/${i}.jpg`);
}

const prepareCardsToGame = () => {
    const arrayToReturn = [];
    photoArray.forEach((photo,index) => {
        const c1 = new Card(index+1, photo);
        const c2 = new Card(index+1, photo);

        arrayToReturn.push(c1,c2);
    })

    return arrayToReturn;
}

const cards = prepareCardsToGame();

const generateCards = cardsArray => {
    cardsArray.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('card');
        const img = document.createElement('img');
        img.id = photo.id;
        img.src = photo.currentImg;
        img.addEventListener('click', () => {
            photo.reverseCard();
            img.classList.toggle('checked-card');
            img.src = photo.currentImg;
        })

        div.appendChild(img);
        cardsContainer.appendChild(div);
    })
};

generateCards(cards);
