//DOM
Rock.addEventListener('click', playRound);
Paper.addEventListener('click', playRound);
Scissors.addEventListener('click', playRound);

const rounds = document.querySelector('#rounds');
//const playerWins = document.querySelector('#playerWins');
//const computerWins = document.querySelector('#computerWins');

//FUNCTIONS
function computerPlay() {
  const gladiators = ['Rock', 'Paper', 'Scissors'];
  return gladiators[Math.floor(Math.random() * gladiators.length)];
}

let counter = 0;
let wins = 0;
let losses = 0;

function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || 
    (computerSelection === 'Paper' && playerSelection === 'Rock') || 
    (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
      const paragraph = document.createElement('p');
      paragraph.textContent = 
      `Loser: the computer's ${computerSelection} 
      beats your ${playerSelection}`;
      rounds.appendChild(paragraph);
      losses++;
      console.log("losses: " + losses);
      counter++;
      console.log("rounds: " + counter);
      if (counter === 5) {
        console.log("GAME OVER");
      }
  } else if ((computerSelection === 'Rock' && playerSelection === 'Paper') || 
    (computerSelection === 'Paper' && playerSelection === 'Scissors') || 
    (computerSelection === 'Scissors' && playerSelection === "Rock")) {
      const paragraph = document.createElement('p');
      paragraph.textContent = 
      `Winner: your ${playerSelection} 
      beats the computer's ${computerSelection}`;
      rounds.appendChild(paragraph);
      wins++;
      console.log("wins: " + wins);
      counter++;
      console.log("rounds: " + counter);
      if (counter === 5) {
        console.log("GAME OVER");
      }
  } else if (computerSelection === playerSelection) {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Tie: ${playerSelection} and ${computerSelection}`;
      rounds.appendChild(paragraph);
  }
}

/*
function winnerOrLoser(winLossCounter) {
    let winnerArray = winLossCounter.filter(winner => winner === "W");
    if (winnerArray.length >= 3) {
        console.log("You are the winner!");
        return "You are the Winner!";
    } else {
        console.log("You lost...");
        return "You lost...";
    }
}
*/