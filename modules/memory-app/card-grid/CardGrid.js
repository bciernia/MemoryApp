import {Card} from "../Card/Card.js";
import {createFileArray} from "../../design-system/file-array/fileArray.js";
import {createDiv, createImg} from "../../design-system/core/core.js";

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

const test = prepareCardsToGame();

export const generateCardsGrid = () => {
    test.forEach(photo => {
        const div = createDiv(['card']);
        const img = createImg(photo.currentImg, `Card ${photo.id}`, []);
        img.id = photo.id;
        img.addEventListener('click', () => {
            photo.reverseCard();
            img.classList.toggle('checked-card');
            img.src = photo.currentImg;
        })

        div.appendChild(img);
        cardsContainer.appendChild(div);
    })
};
