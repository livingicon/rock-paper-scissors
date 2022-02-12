//Buttons
Rock.addEventListener('click', playRound);
Paper.addEventListener('click', playRound);
Scissors.addEventListener('click', playRound);

//DOM methods
const rounds = document.querySelector('#rounds');

function computerPlay() {
  const gladiators = ['Rock', 'Paper', 'Scissors'];
  return gladiators[Math.floor(Math.random() * gladiators.length)];
}
  
function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || 
    (computerSelection === 'Paper' && playerSelection === 'Rock') || 
    (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Loser: ${computerSelection} beats ${playerSelection}`;;
        rounds.appendChild(paragraph);
  } else if ((computerSelection === 'Rock' && playerSelection === 'Paper') || 
    (computerSelection === 'Paper' && playerSelection === 'Scissors') || 
    (computerSelection === 'Scissors' && playerSelection === "Rock")) {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Winner: ${playerSelection} beats ${computerSelection}`;
      rounds.appendChild(paragraph);
  } else if (computerSelection === playerSelection) {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Tie";
    rounds.appendChild(paragraph);
  } 
}

/*
function game() {
  const winLossCounter = [];
  for (let i = 0; winLossCounter.length < 5; i++) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    console.log(playRound());
  if(playRound() !== "Tie") {
        winLossCounter.push(playRound());
    }
  } 
  return winnerOrLoser(winLossCounter);
}
*/

/*
function winnerOrLoser(winLossCounter) {
    let winnerArray = winLossCounter.filter(winner => winner === "Winner");
    if (winnerArray.length >= 3) {
        console.log("You are the winner!");
        return "You are the Winner!";
    } else {
        console.log("You lost..."");
        return "You lost...";
    }
}
*/