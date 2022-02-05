/*play 5 rounds that aren't tied*/
/*when not tied, push winner or loser to counters*/
/*compare counter length and declare winner or loser*/

const playerSelection = capitalize(prompt("Paper, Rock, or Scissors?"));
const computerSelection = computerPlay();

/*Currently only runs playRound*/
function game() {
    return playRound(playerSelection, computerSelection);
}

console.log("player selection game: " + playerSelection);
console.log("computer selection game: " + computerSelection);
console.log("game result game: " + (game()));

/*Helper Function 1: Computer randomly returns 'Rock', 'Paper' or 'Scissors'*/
function computerPlay() {
    const gladiators = ['Rock', 'Paper', 'Scissors'];
    return gladiators[Math.floor(Math.random() * gladiators.length)];
}

/*Helper Function 2: Capitalize function used to make playerSelection input uniform*/
function capitalize(string) {
    let str2 = string
        .toLowerCase()
        .slice(1)
    let str1 = string
        .slice(0, 1)
        .toUpperCase()
    return str1 + str2;
}

/*Helper Function 3: Plays round of game returning winner, loser or tie*/
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissor') {
        return "Loser";
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        return "Winner";
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return "Loser";
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return "Winner";
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return "Loser";
    } else if (computerSelection === 'Scissors' && playerSelection === "Rock") {
        return "Winner";
    } else if (computerSelection === playerSelection) {
        return "Tie";
    }
}

console.log("player selection PR: " + playerSelection);
console.log("computer selection PR: " + computerSelection);
console.log("game result PR: " + (playRound(playerSelection, computerSelection)));