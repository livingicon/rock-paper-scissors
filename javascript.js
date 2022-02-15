/*
To DO:
1. Make game end (leave commentary and totals, but add "Winner" and play again button)
2. CSS
*/

//DOM
ROCK.addEventListener('click', playRound);
PAPER.addEventListener('click', playRound);
SCISSORS.addEventListener('click', playRound);

const rounds = document.querySelector('#rounds');
const playerWins = document.querySelector('#playerWins');
const computerWins = document.querySelector('#computerWins');
const game = document.querySelector('#game');
const body = document.querySelector('body');


//FUNCTION VARIABLES
let counter = 0;
let wins = 0;
let losses = 0;
computerWins.textContent = `${losses}`;
playerWins.textContent = `${wins}`;

//FUNCTIONS
function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
    (computerSelection === 'PAPER' && playerSelection === 'ROCK') || 
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
      counter++;
      const paragraph = document.createElement('p');
      paragraph.textContent = 
      `Round ${counter}: Loser
      (Your ${playerSelection} 
      loses to the computer's ${computerSelection}.)`;
      results.appendChild(paragraph);
      losses++;
      computerWins.textContent = `${losses}`;
      if (counter === 5) {
        winOrLose(losses);
      }
  } else if ((computerSelection === 'ROCK' && playerSelection === 'PAPER') || 
    (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') || 
    (computerSelection === 'SCISSORS' && playerSelection === "ROCK")) {
      counter++;
      const paragraph = document.createElement('p');
      paragraph.textContent = 
      `Round ${counter}: Winner
      (Your ${playerSelection} 
      beat the computer's ${computerSelection}.)`;
      results.appendChild(paragraph);
      wins++;
      playerWins.textContent = `${wins}`;
      if (counter === 5) {
        winOrLose(losses);
      }
  } else if (computerSelection === playerSelection) {
      const paragraph = document.createElement('p');
      paragraph.textContent = `No Count (Tie): ${playerSelection} and ${computerSelection}`;
      results.appendChild(paragraph);
  }
}

function computerPlay() {
  const gladiators = ['ROCK', 'PAPER', 'SCISSORS'];
  return gladiators[Math.floor(Math.random() * gladiators.length)];
}

function winOrLose(losses) {
  if (losses >= 3) {
    const paragraph = document.createElement('p');
    paragraph.textContent = "YOU LOST. GAME OVER.";
    paragraph.style.color = 'red';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.fontSize = '75px';

    const playAgain = document.createElement('button');
    playAgain.setAttribute('id', 'refresh');
    playAgain.textContent = "PLAY AGAIN";
    playAgain.style.fontSize = '50px';
    playAgain.style.fontWeight = 'bold';

    body.removeChild(game);
    results.appendChild(paragraph);
    results.appendChild(playAgain);
    refresh.addEventListener('click', reload, false);
 
  } else {
    const paragraph = document.createElement('p');
    paragraph.textContent = "YOU WON. GAME OVER.";
    paragraph.style.color = 'green';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.fontSize = '75px';

    const playAgain = document.createElement('button');
    playAgain.setAttribute('id', 'refresh');
    playAgain.textContent = "PLAY AGAIN";
    playAgain.style.fontSize = '50px';
    playAgain.style.fontWeight = 'bold';

    body.removeChild(game);
    results.appendChild(paragraph);
    results.appendChild(playAgain);
    refresh.addEventListener('click', reload, false);
  }
}

function reload() {
  reload = location.reload();
}

function energy() {

}