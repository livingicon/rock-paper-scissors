/*THE GAME (should declare a winner only after 5 valid games)*/
function game() {
    const winLossCounter = [];
    for (let i = 0; winLossCounter.length < 5; i++) {
        const playerSelection = capitalize(window.prompt("Paper, Rock, or Scissors?"));
        const computerSelection = computerPlay();
        /*This is where I got stuck. I was making the playerSelection and computerSelection outside of the for loop so they were only calling once*/
        console.log(playRound(playerSelection, computerSelection));
        if(playRound(playerSelection, computerSelection) !== "Tie" && playRound(playerSelection, computerSelection) !== "Invalid entry...check your spelling and try again.") {
            winLossCounter.push(playRound(playerSelection, computerSelection));
        }
    } 
    return winnerOrLoser(winLossCounter);
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
        .slice(1);
    let str1 = string
        .slice(0, 1)
        .toUpperCase();
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
    } else {
        return "Invalid entry...check your spelling and try again."
    }
}

/*Helper Function 4: Determines winner or loser*/
function winnerOrLoser(winLossCounter) {
    let winnerArray = winLossCounter.filter(winner => winner === "Winner");
    if (winnerArray.length >= 3) {
        return "You are the Winner!";
    } else {
        return "You lost...";
    }
}
