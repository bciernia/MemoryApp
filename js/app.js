import {generateCardsGrid} from "../modules/memory-app/card-grid/CardGrid.js";

const newGameBtn = document.querySelector('.btn-new-game');
const playerName = document.querySelector('#player-name');

newGameBtn.addEventListener('click', () => {
    generateCardsGrid();
    newGameBtn.style.display = 'none';
    playerName.style.display = 'none';
});

