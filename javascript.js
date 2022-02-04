/*Helper Function: Computer randomly returns 'Rock', 'Paper' or 'Scissors'*/
function computerPlay() {
    const gladiators = ['Rock', 'Paper', 'Scissors'];
    return gladiators[Math.floor(Math.random() * gladiators.length)];
}

/*Helper Function: Capitalize function used to make playerSelection input capitalized for playRound function*/
function capitalize(string) {
    let str2 = string
        .toLowerCase()
        .slice(1)
    let str1 = string
        .slice(0, 1)
        .toUpperCase()
    return str1 + str2;
}

/*Helper Function: Plays round of game returning winner, loser or tie*/
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

/*Currently only runs playRound*/
function game() {
    const playerSelection = capitalize(prompt("Paper, Rock, or Scissors?"));
    const computerSelection = computerPlay();
    const winLossCounter = [];

    console.log(playerSelection);
    console.log(computerSelection);
    while (winLossCounter.length < 5) {
        if (playRound(playerSelection, computerSelection) !== "Tie") {
            winLossCounter.push(playRound(playerSelection, computerSelection));
        } else {
            return "Tie";
        }
    }  
    
    console.log(winLossCounter.length);
    return winLossCounter;
}

console.log(game());

/*
1. concatenate if != T
2. stop at .length of 5
3. if 3 W winner, if not L

Note: still needs to log each round
*/