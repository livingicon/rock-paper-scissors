//Buttons
Rock.addEventListener('click', playRound);
Paper.addEventListener('click', playRound);
Scissors.addEventListener('click', playRound);

//function playRound(e) {
//    const playerSelection = e.target.id;
//    console.log(playerSelection);
//}

/*  
function game() {
  const winLossCounter = [];
  for (let i = 0; winLossCounter.length < 5; i++) {
    //const playerSelection = capitalize(window.prompt("Paper, Rock, or Scissors?"));
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  if(playRound(playerSelection, computerSelection) !== "Tie" && playRound(playerSelection, computerSelection) !== "Invalid entry...check your spelling and try again.") {
        winLossCounter.push(playRound(playerSelection, computerSelection));
    }
  } 
  return winnerOrLoser(winLossCounter);
}
console.log(game());
*/

function computerPlay() {
    const gladiators = ['Rock', 'Paper', 'Scissors'];
    return gladiators[Math.floor(Math.random() * gladiators.length)];
}

/*
function capitalize(string) {
    let str2 = string
        .toLowerCase()
        .slice(1);
    let str1 = string
        .slice(0, 1)
        .toUpperCase();
    return str1 + str2;
}
*/

function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    if (computerSelection === 'Rock' && playerSelection === 'Scissor') {
        console.log("Loser");
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        console.log("Winner");
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        console.log("Loser");
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        console.log("Winner");
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        console.log("Loser");
    } else if (computerSelection === 'Scissors' && playerSelection === "Rock") {
        console.log("Winner");
    } else if (computerSelection === playerSelection) {
        console.log("Tie");
    } 
}

/*
function winnerOrLoser(winLossCounter) {
    let winnerArray = winLossCounter.filter(winner => winner === "Winner");
    if (winnerArray.length >= 3) {
        return "You are the Winner!";
    } else {
        return "You lost...";
    }
}
*/