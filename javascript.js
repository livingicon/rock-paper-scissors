/*play 5 rounds that aren't tied*/
/*when not tied, push winner or loser to counters*/
/*compare counter length and declare winner or loser*/

/*Currently only runs the prompt once*/
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = capitalize(window.prompt("Paper, Rock, or Scissors?"));
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());

/*Helper Function 1: Computer randomly returns 'Rock', 'Paper' or 'Scissors'*/
function computerPlay() {
    const gladiators = ['Rock', 'Paper', 'Scissors'];
    return gladiators[Math.floor(Math.random() * gladiators.length)];
}

/*Helper Function 2: used in playerSelection function*/
function capitalize(string) {
    let str2 = string
        .toLowerCase()
        .slice(1)
    let str1 = string
        .slice(0, 1)
        .toUpperCase()
    return str1 + str2;
}

/*Helper Function 4: Plays round of game returning winner, loser or tie*/
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
    } else {
        return "Invalid entry...check your spelling and try again."
    }
}