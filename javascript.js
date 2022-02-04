/*Computer randomly returns 'Rock', 'Paper' or 'Scissors'*/
function computerPlay() {
    const gladiators = ['Rock', 'Paper', 'Scissors'];
    return gladiators[Math.floor(Math.random() * gladiators.length)];
}

/*Capitalize function used to make playerSelection input capitalized for playRound function*/
function capitalize(string) {
    let str2 = string
        .toLowerCase()
        .slice(1)
    let str1 = string
        .slice(0, 1)
        .toUpperCase()
    return str1 + str2;
}

/*Plays round of game declaring winner or tie*/
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissor') {
        return "You Lose! Rock beats Scissors.";
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        return "You Win! Paper beats Rock.";
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return "You Lose! Paper beats Rock.";
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return "You Win! Scissors beats Paper.";
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return "You Lose! Scissors beats Paper.";
    } else if (computerSelection === 'Scissors' && playerSelection === "Rock") {
        return "You Win! Rock beats Scissors.";
    } else {
        return "Tie, play again!"
    }
}

function game() {
    const playerSelection = capitalize(prompt("Paper, Rock, or Scissors?"));
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}

console.log(game());