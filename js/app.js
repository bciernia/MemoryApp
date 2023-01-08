import {generateCardsGrid} from "../modules/memory-app/card-grid/CardGrid.js";

const newGameBtn = document.querySelector('.btn-new-game');
const rankingTransitionBtn = document.querySelector('.btn-ranking-transition');
const ranking = document.querySelector('.ranking');

newGameBtn.addEventListener('click', () => {
    generateCardsGrid();
    newGameBtn.style.display = 'none';
});

rankingTransitionBtn.addEventListener('click', () => {
    ranking.classList.toggle('ranking-hidden');
})

