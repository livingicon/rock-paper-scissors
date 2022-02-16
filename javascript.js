ROCK.addEventListener('click', playRound);
PAPER.addEventListener('click', playRound);
SCISSORS.addEventListener('click', playRound);

const rounds = document.querySelector('#rounds');
const playerWins = document.querySelector('#playerWins');
const computerWins = document.querySelector('#computerWins');
const game = document.querySelector('#game');
const left = document.querySelector('#left-container');

let counter = 0;
let wins = 0;
let losses = 0;
computerWins.textContent = `${losses}`;
playerWins.textContent = `${wins}`;

function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
    (computerSelection === 'PAPER' && playerSelection === 'ROCK') || 
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
      counter++;
      losses++;
      losing(counter, playerSelection, computerSelection);
      reduceEnergyPlayer();
      buttonColor(e);
      if (counter === 5) {
        winOrLose(losses);
      }
  } else if ((computerSelection === 'ROCK' && playerSelection === 'PAPER') || 
    (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') || 
    (computerSelection === 'SCISSORS' && playerSelection === "ROCK")) {
      counter++;
      wins++;
      winning(counter, playerSelection, computerSelection);
      reduceEnergyComputer();
      buttonColor(e);
      if (counter === 5) {
        winOrLose(losses);
      }
  } else if (computerSelection === playerSelection) {
      buttonColor(e);
      const paragraph = document.createElement('p');
      paragraph.textContent = `No Count (Tie): 
      ${playerSelection} and ${computerSelection}`;
      paragraph.style.color = 'rgb(223, 223, 2)';
      results.appendChild(paragraph);
  }
}

function computerPlay() {
  const gladiators = ['ROCK', 'PAPER', 'SCISSORS'];
  return gladiators[Math.floor(Math.random() * gladiators.length)];
}

function winOrLose(losses) {
  if (losses >= 3) {
    lost();
  } else {
    won();
  }
}

function reload() {
  reload = location.reload();
}

function reduceEnergyPlayer(e) {
  if (losses === 1) {
    const hit = document.querySelector('.plNrgThree');
    hit.style.animation = "pulse .3s infinite";
    console.log(hit.style.animation);
  } else if (losses === 2) {
    const hit2 = document.querySelector('.plNrgTwo');
    hit2.style.animation = "pulse .3s infinite";
  } else if (losses === 3) {
    const hit3 = document.querySelector('.plNrgOne');
    hit3.style.animation = "pulse .3s infinite";
  }
}

function reduceEnergyComputer() {
  if (wins === 1) {
    const damage = document.querySelector('.cmNrgThree');
    damage.style.animation = "pulse .3s infinite";
  } else if (wins === 2) {
    const damage2 = document.querySelector('.cmNrgTwo');
    damage2.style.animation = "pulse .3s infinite";
  } else if (wins === 3) {
    const damage3 = document.querySelector('.cmNrgOne');
    damage3.style.animation = "pulse .3s infinite";
  }
}

function lost() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "YOU LOST";
    paragraph.style.animation = "pulse 1s infinite";
    paragraph.style.fontWeight = 'bold';
    paragraph.style.fontSize = '100px';
    paragraph.style.textAlign = 'center';

    const playAgain = document.createElement('button');
    playAgain.setAttribute('id', 'refresh');
    playAgain.textContent = "CLICK TO PLAY AGAIN";
    playAgain.style.fontSize = '50px';
    playAgain.style.fontWeight = 'bold';
    playAgain.style.margin = "20px 0px 20px";

    left.removeChild(game);
    results.appendChild(paragraph);
    results.appendChild(playAgain);
    refresh.addEventListener('click', reload, false);
}

function won() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "YOU WON";
    paragraph.style.animation = "pulse2 2s infinite";
    paragraph.style.fontWeight = 'bold';
    paragraph.style.fontSize = '100px';
    paragraph.style.textAlign = 'center';

    const playAgain = document.createElement('button');
    playAgain.setAttribute('id', 'refresh');
    playAgain.textContent = "CLICK TO PLAY AGAIN";
    playAgain.style.fontSize = '50px';
    playAgain.style.fontWeight = 'bold';
    playAgain.style.margin = "20px 0px 20px";

    left.removeChild(game);
    results.appendChild(paragraph);
    results.appendChild(playAgain);
    refresh.addEventListener('click', reload, false);
}

function winning(counter, playerSelection, computerSelection) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 
    `Round ${counter}: Winner
    (Your ${playerSelection} 
    beat the computer's ${computerSelection}.)`;
    paragraph.style.color = 'rgb(26, 202, 26)';
    results.appendChild(paragraph);
    playerWins.textContent = `${wins}`;
}

function losing(counter, playerSelection, computerSelection) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 
    `Round ${counter}: Loser
    (Your ${playerSelection} 
    loses to the computer's ${computerSelection}.)`;
    paragraph.style.color = 'red';
    results.appendChild(paragraph);
    computerWins.textContent = `${losses}`;
}

function buttonColor(e) {
  const rock = document.querySelector('#ROCK');
  const paper = document.querySelector('#PAPER');
  const scissors = document.querySelector('#SCISSORS');
  if (e.target.id === 'ROCK') {
    rock.style.backgroundColor = 'red';
    paper.style.backgroundColor = "#3882f6";
    scissors.style.backgroundColor = "#3882f6";
  } else if (e.target.id === "PAPER") {
    paper.style.backgroundColor = 'red';
    rock.style.backgroundColor = "#3882f6";
    scissors.style.backgroundColor = "#3882f6";
  } else if (e.target.id === "SCISSORS") {
    scissors.style.backgroundColor = 'red';
    rock.style.backgroundColor = "#3882f6";
    paper.style.backgroundColor = "#3882f6";
  } 
}