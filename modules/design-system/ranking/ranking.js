import {addRowToTable} from "../core/core.js";

const rankingTransitionBtn = document.querySelector('.btn-ranking-transition');
const ranking = document.querySelector('.ranking');
const rankingTable = document.querySelector('.ranking-table-body');
const clearRankingBtn = ranking.querySelector('.btn-clear-ranking');

const rankingFromLocalStorage = localStorage.getItem('ranking');
let resultRanking = [];

if(rankingFromLocalStorage!==null){
    resultRanking = JSON.parse(rankingFromLocalStorage);
}

clearRankingBtn.addEventListener('click', () => {
    localStorage.removeItem('ranking');
    resultRanking = [];
    addRowToTable(rankingTable,resultRanking);
})

rankingTransitionBtn.addEventListener('click', () => {
    if(ranking.classList.contains('ranking-hidden')){
        addRowToTable(rankingTable,resultRanking);
    }

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
