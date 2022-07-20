const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const availableMoves = document.querySelectorAll('button');

let yourChoice;
let computerChoice;
let result;

availableMoves.forEach((move) =>
  move.addEventListener('click', (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomMove = Math.floor(Math.random() * 3);

  if (randomMove === 1) {
    computerChoice = 'rock';
  } else if (randomMove === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === yourChoice) {
    result = 'DRAW';
  }
  if (computerChoice === 'rock' && yourChoice === 'paper') {
    result = 'YOU WIN!';
  }
  if (computerChoice === 'rock' && yourChoice === 'scissors') {
    result = 'YOU LOSE!';
  }
  if (computerChoice === 'paper' && yourChoice === 'rock') {
    result = 'YOU LOSE!';
  }
  if (computerChoice === 'paper' && yourChoice === 'scissors') {
    result = 'YOU WIN!';
  }
  if (computerChoice === 'scissors' && yourChoice === 'rock') {
    result = 'YOU WIN!';
  }
  if (computerChoice === 'scissors' && yourChoice === 'paper') {
    result = 'YOU LOSE!';
  }

  resultDisplay.innerHTML = result;
}
