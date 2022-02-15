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

//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    // your code here!

}


//Capitalises the first char of a string, set rest to lowercase & returns result
// function capitalise(word) { 
//     let firstLetter = word.charAt(0);
//     let restOfWord = word.slice(1);
//     return(firstLetter.toUpperCase() + restOfWord.toLowerCase());
//   }




const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));