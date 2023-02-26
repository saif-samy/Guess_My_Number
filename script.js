'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let didWin = false;
let didLose = false;

const checkCondition = function (guess) {
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  // Winning
  else if (guess === secretNumber && score > 0) {
    didWin = true;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Number greater than or smaller
  else if (didWin === false && score > 1) {
    document.querySelector('.score').textContent = --score;
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low!';
    }
  } else {
    if (didLose === false) {
      didLose = true;
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('body').style.backgroundColor = '#e70000';
    }
  }
};

const resetGame = function () {
  score = 20;
  didWin = false;
  didLose = false;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.btn.again').addEventListener('click', resetGame);

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  checkCondition(guess);
});
