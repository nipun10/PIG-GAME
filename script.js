'use strict';
const scoreEle = [document.querySelector('#score--0'),document.querySelector('#score--1')];
const diceEle = document.querySelector('.dice');
const currentScoreEle = [document.querySelector('#current--0'), document.querySelector('#current--1')];
const activePlayer = [document.querySelector('.player--0'), document.querySelector('.player--1')];
let currentScore = [0, 0];
let currentPlayer = 0;
let activeScore = 0;
let playing = true;
const resetEle = document.querySelector('.btn--new');
scoreEle[0].textContent = 0;
scoreEle[1].textContent = 0;
diceEle.classList.add('hidden');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');
diceRoll.addEventListener('click', function () {
    if (!playing)
        return;
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${randomNumber}.png`;
    if (randomNumber === 1) {
        activeScore = 0;
        currentScoreEle[currentPlayer].textContent = 0;
        activePlayer[currentPlayer].classList.remove('player--active');
        currentPlayer = (currentPlayer + 1) % 2;
        activePlayer[currentPlayer].classList.add('player--active');
    }
    else {
        activeScore+=Number(randomNumber);
        currentScoreEle[currentPlayer].textContent = activeScore;
    }

})
diceHold.addEventListener('click', function () {
     if (!playing)
        return;
    currentScore[currentPlayer] += activeScore;
    scoreEle[currentPlayer].textContent = currentScore[currentPlayer];
    if (currentScore[currentPlayer] >= 100) {
        diceEle.classList.add('hidden');
        activePlayer[currentPlayer].classList.remove('player--active');
        activePlayer[currentPlayer].classList.add('player--winner');
        playing = false;
        return;
        
    }
    activeScore = 0;
    currentScoreEle[currentPlayer].textContent = 0;
    activePlayer[currentPlayer].classList.remove('player--active');
    currentPlayer = (currentPlayer + 1) % 2;
    activePlayer[currentPlayer].classList.add('player--active');
})
resetEle.addEventListener('click', function () {
    playing = true;
    activePlayer[currentPlayer].classList.remove('player--active');
    activePlayer[currentPlayer].classList.remove('player--winner');
    activePlayer[0].classList.add('player--active');
    currentPlayer = 0;
    activeScore = 0; 
    currentScore[0] = 0;
    currentScore[1] = 0;
    scoreEle[0].textContent = 0;
    scoreEle[1].textContent = 0;
    currentScoreEle[0].textContent = 0;
    currentScoreEle[1].textContent = 0;




})

