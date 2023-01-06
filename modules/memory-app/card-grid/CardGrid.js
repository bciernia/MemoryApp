import {Card} from "../Card/Card.js";
import {createFileArray} from "../../design-system/file-array/fileArray.js";
import {createDiv, createImg, clearDiv, switchClicking} from "../../design-system/core/core.js";
import {shuffleArray} from "../../design-system/shuffle-array/shuffleArray.js";
import {areTwoCardsChosen} from "../game-logic/gameLogic.js";

const cardsContainer = document.querySelector('.cards-container');

const prepareCardsToGame = () => {
    const fileArray = createFileArray();
    const cardsArray = [];
    fileArray.forEach((photo,index) => {
        const c1 = new Card(index, photo);
        const c2 = new Card(index, photo);

        cardsArray.push(c1,c2);
    })

    return cardsArray;
}

const generateCardGrid = cardsArray => {
    cardsArray.forEach(photo => {
        const div = createDiv(['card']);
        const img = createImg(photo.currentImg, `Card ${photo.id}`, []);
        img.id = photo.id;
        img.addEventListener('click', () => {
            photo.reverseCard();
            img.classList.toggle('checked-card');
            img.src = photo.currentImg;
            areTwoCardsChosen(cardsArray);
        })
        div.appendChild(img);
        cardsContainer.appendChild(div);
    })
}

const turnCards = (gameArray, shouldShowCardsFront) => {
    const images = cardsContainer.getElementsByTagName('img');
    for(let i=0;i<images.length;i++){
        gameArray.find(card => {
            if(images[i].id == card.id && shouldShowCardsFront){
                images[i].src = card.cardFront;
            } else if(images[i].id == card.id && !shouldShowCardsFront){
                images[i].src = card.cardBack;
            }
        })
    }
}

export const generateCardsGrid = () => {
    clearDiv(cardsContainer);
    const cardsArrayToShuffle = prepareCardsToGame();
    const gameArray = shuffleArray(cardsArrayToShuffle);
    generateCardGrid(gameArray);
    turnCards(gameArray, true);
    switchClicking(cardsContainer);
    setTimeout(() => {
        turnCards(gameArray, false);
        switchClicking(cardsContainer);
    }, 3000);
};

export const startNewGame = () => {
    generateCardsGrid();
}