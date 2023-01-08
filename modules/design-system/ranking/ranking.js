const rankingTransitionBtn = document.querySelector('.btn-ranking-transition');
const ranking = document.querySelector('.ranking');

const rankingFromLocalStorage = localStorage.getItem('ranking');
let resultRanking = [];

if(rankingFromLocalStorage!==null){
    resultRanking = JSON.parse(rankingFromLocalStorage);
}

console.log(resultRanking);

rankingTransitionBtn.addEventListener('click', () => {
    ranking.classList.toggle('ranking-hidden');
})

export const addNewResultToRankingArray = (playersName, time) => {
    const newResult = {
        Name: playersName,
        Time: time,
    }

    resultRanking.push(newResult);

    localStorage.setItem("ranking", JSON.stringify(resultRanking));
}