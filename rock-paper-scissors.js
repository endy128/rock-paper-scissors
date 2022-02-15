// declare function computerPlay
function computerPlay() {

    // generate random number store in variable "random"
    let random = Math.random() * 3 + 1;

    //round down the random number to a whole number
    random = Math.floor(random);

    // initialise computerSelection variable, set it to ""
    let computerSelection = "";

    // if "random" = 1, computerSelection = "Rock"
    if (random == 1) {
        computerSelection = "Rock";
    } else if (random == 2) {
    // if "random" = 2, computerSelection = "Paper"
        computerSelection = "Paper";
    } else {
        // if "random" = 3, computerSelection = "Scissors"
        computerSelection = "Scissors";
    }
// return computerselection
return(computerSelection);
}


function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == "Paper" && computerSelection == "Rock") {
        result = "P"; // Player wins
        return(result);
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        result = "P"; // Player wins
        return(result);
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        result = "P"; // Player wins
        return(result);
    } else if (playerSelection == computerSelection) {
        result = "D"; // Draw
        return(result);
    } else {
        result = "C"; // CPU Wins
        return(result);
    }
}


// Capitalises the first char of a string, set rest to lowercase & returns result
function capitaliseFirst(word) { 
    let firstLetter = word.charAt(0);
    let restOfWord = word.slice(1);
    return(firstLetter.toUpperCase() + restOfWord.toLowerCase());
  }




function game() {
    let playerWins = 0;
    let computerWins = 0;
    let numberOfDraws = 0;
    let result = "";
    let computerSelection = "";
    let playerSelection = "";
    let playerInput = "";

    for (let i = 0; i < 5; i++) {

        playerInput = capitaliseFirst(prompt("Enter your choice: "));
        result = playRound(playerSelection = playerInput, computerSelection = computerPlay());

        console.log("Round " + (i + 1));
        console.log("Player: " + playerSelection);
        console.log("CPU: " + computerSelection);


        if (result == "P") {
            playerWins++;
            console.log("Player WINS!")
        } else if (result == "C") {
            computerWins++;
            console.log("CPU WINS!")
        } else {
            numberOfDraws++;
            console.log("It's a DRAW")
        }


     }
     console.log("Player wins: " + playerWins);
     console.log("CPU Wins: " + computerWins);
     console.log("Number of Draws: " + numberOfDraws);
}

game();