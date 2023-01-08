import {generateCardsGrid} from "../modules/memory-app/card-grid/CardGrid.js";

const newGameBtn = document.querySelector('.btn-new-game');



newGameBtn.addEventListener('click', () => {
    generateCardsGrid();
    newGameBtn.style.display = 'none';
});

