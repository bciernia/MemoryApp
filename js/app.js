import {generateCardsGrid} from "../modules/memory-app/card-grid/CardGrid.js";
import {addRowToTable} from "../modules/design-system/core/core.js";

const newGameBtn = document.querySelector('.btn-new-game');
const playerName = document.querySelector('#player-name');
const rankingBtn = document.querySelector('.btn-ranking-transition');
const table = document.querySelector('.ranking-table');

newGameBtn.addEventListener('click', () => {
    generateCardsGrid();
    newGameBtn.style.display = 'none';
    playerName.style.display = 'none';
});

