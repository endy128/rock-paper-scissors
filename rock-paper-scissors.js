// declare function computerPlay
function computerPlay() {

    // generate random number store in variable "random"
    let random = Math.random() * 3 + 1;

    //round down the random number to a whole number
    random = Math.floor(random);

    // initialise computerSelection variable, set it to ""
    let computerSelection = '';

    // if "random" = 1, computerSelection = "Rock"
    if (random == 1) {
        computerSelection = 'rock';
    } else if (random == 2) {
    // if "random" = 2, computerSelection = "Paper"
        computerSelection = 'paper';
    } else {
        // if "random" = 3, computerSelection = "Scissors"
        computerSelection = 'scissors';
    }
// return computerselection
return(computerSelection);
}

// plays round of rock, paper scissors and returns the result
function playRound(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'playerWins'; // Player wins
        return(result);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'playerWins'; // Player wins
        return(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'playerWins'; // Player wins
        return(result);
    } else if (playerSelection == computerSelection) {
        result = 'draw'; // Draw
        return(result);
    } else {
        result = 'cpuWins'; // CPU Wins
        return(result);
    }
}

let playerWins = 0;
let computerWins = 0;
let numberOfDraws = 0;




function game() {
    let result = '';
    let computerSelection = '';
    let playerSelection = '';

    const selection = document.querySelector('.selection');

    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        result = playRound(playerSelection = 'rock', computerSelection = computerPlay());

        selection.textContent = `P1: ${playerSelection} CPU: ${computerSelection} Result: ${result}`;

        tallyResult(result);

    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        result = playRound(playerSelection = 'paper', computerSelection = computerPlay());

        selection.textContent = `P1: ${playerSelection} CPU: ${computerSelection} Result: ${result}`;
    
        tallyResult(result);

    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        result = playRound(playerSelection = 'scissors', computerSelection = computerPlay());

        selection.textContent = `P1: ${playerSelection} CPU: ${computerSelection} Result: ${result}`;
   
        tallyResult(result);

    });
 
}

function tallyResult(result) {
    const score = document.querySelector('.score');
    if (result == 'playerWins') {
        playerWins++;
        score.textContent = `P1: ${playerWins} CPU: ${computerWins} Draws: ${numberOfDraws}`;
    } else if (result == 'cpuWins') {
        computerWins++;
        score.textContent = `P1: ${playerWins} CPU: ${computerWins} Draws: ${numberOfDraws}`;
    } else {
        numberOfDraws++;
        score.textContent = `P1: ${playerWins} CPU: ${computerWins} Draws: ${numberOfDraws}`;
    }

    if (playerWins > 4) {
        score.textContent = `PLAYER 1 WINS!!!!`;
        playerWins = 0;
        computerWins = 0;
        numberOfDraws = 0;
    } else if (computerWins > 4) {
        score.textContent = `CPU WINS!!!!`;
        playerWins = 0;
        computerWins = 0;
        numberOfDraws = 0;
    }

}

game();