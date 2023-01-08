const rankingTransitionBtn = document.querySelector('.btn-ranking-transition');
const ranking = document.querySelector('.ranking');

const resultRanking = [];

rankingTransitionBtn.addEventListener('click', () => {
    ranking.classList.toggle('ranking-hidden');
})

export const addNewResultToRankingArray = (playersName, time) => {
    const newResult = {
        Name: playersName,
        Time: time,
    }

    resultRanking.push(newResult);

    console.log(resultRanking);
}