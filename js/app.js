import {generateCardsGrid} from "../modules/memory-app/card-grid/CardGrid.js";

const newGameBtn = document.querySelector('.start-btn');

newGameBtn.addEventListener('click', () => {

    generateCardsGrid();
})
