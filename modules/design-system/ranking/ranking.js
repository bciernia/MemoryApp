const rankingTransitionBtn = document.querySelector('.btn-ranking-transition');
const ranking = document.querySelector('.ranking');

rankingTransitionBtn.addEventListener('click', () => {
    ranking.classList.toggle('ranking-hidden');
})