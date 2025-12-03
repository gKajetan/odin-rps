console.log("Welcome to the Rock, Paper, Scissors game.");

// 0 - rock, 1 - paper, 2 - scissors
/* console.log(randomChoice); */

let computerChoice = Math.floor(Math.random() * 3);
let humanChoice = prompt("Pick your choice");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (computerChoice == 0) {
        return 'rock';
    }
    else if (computerChoice == 1) {
        return 'paper';
    }
    else if (computerChoice == 2) {
        return 'scissors';
    }
}

function getHumanChoice() {
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // tie condition
    if(humanChoice === computerChoice) {
        return "You've tied";
    }
}

console.log("I've chosen " + getComputerChoice() + ' (rand number: ' + computerChoice + ')');

console.log('Your choice: ' + getHumanChoice() + ' (input: ' + humanChoice + ')');

console.log(playRound());