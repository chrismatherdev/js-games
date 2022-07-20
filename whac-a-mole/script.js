const gridSquare = document.querySelectorAll('.grid-square');
const mole = document.querySelector('.mole');
const timeRemaining = document.getElementById('time-remaining');
const score = document.getElementById('score');

let result = 0;
let time = 60;
let timerId = null;
let selectedPosition;

function selectRandomGridSquare() {
  let randomGridSquare = gridSquare[Math.floor(Math.random() * 9)];
  randomGridSquare.classList.add('mole');

  gridSquare.forEach((square) => {
    square.classList.remove('mole');
  });

  selectedPosition = randomGridSquare.id;
}

gridSquare.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id == selectedPosition) {
      result++;
      score.textContent = result;
      selectedPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomGridSquare, 500);
}

moveMole();

function countDown() {
  time--;
  timeLeft.textContent = time;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('GAME OVER. Your final score is' + result);
  }
}
