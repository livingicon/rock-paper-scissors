/*Computer randomly returns 'Rock', 'Paper' or 'Scissors'*/
function computerPlay() {
    const gladiators = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = gladiators[Math.floor(Math.random() * gladiators.length)];
    return computerSelection;
}

/*Plays round of game declaring winner
1. Take any string input and make it formatted lowercse with first letter capitalized
2. 
*/
function playRound(playerSelection, computerSelection) {

    let str2 = playerSelection
        .toLowerCase()
        .slice(1)
    let str1 = playerSelection
        .slice(0, 1)
        .toUpperCase()
    let playerSelection2 = str1 + str2;

    if (computerSelection === 'Rock' && playerSelection2 === 'Scissor') {
        return "You Lose! Rock beats Scissors.";
    } else if (computerSelection === 'Rock' && playerSelection2 === 'Paper') {
        return "You Win! Paper beats Rock.";
    } else if (computerSelection === 'Paper' && playerSelection2 === 'Rock') {
        return "You Lose! Paper beats Rock.";
    } else if (computerSelection === 'Paper' && playerSelection2 === 'Scissors') {
        return "You Win! Scissors beats Paper.";
    } else if (computerSelection === 'Scissors' && playerSelection2 === 'Paper') {
        return "You Lose! Scissors beats Paper.";
    } else if (computerSelection === 'Scissors' && playerSelection2 === "Rock") {
        return "You Win! Rock beats Scissors.";
    } else {
        return "Tie, play again!"
    }
}

const playerSelection = 'paPeR';
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


