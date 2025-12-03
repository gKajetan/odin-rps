console.log("Welcome to the Rock, Paper, Scissors game.");

// 0 - rock, 1 - paper, 2 - scissors
/* console.log(randomChoice); */

let computerChoice = Math.floor(Math.random() * 3);
let humanChoice = prompt("Pick your choice");
let humanScore = 0;
let computerScore = 0;

/* for (let i = 0; i <= 5; i++) {
    let humanChoice = prompt("Pick your choice");
} */

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
    // win condition
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
        return("You've win!");
    }
    // lose condition
    else if ((humanChoice==='rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')) {
        return("You've lost");
    }
    // tie condition
    else if(humanChoice === computerChoice) {
        return "You've tied";
    }
}

console.log('Your choice: ' + getHumanChoice() + ' (input: ' + humanChoice + ')');

console.log("I've chosen " + getComputerChoice() + ' (rand number: ' + computerChoice + ')');

console.log(playRound(getHumanChoice(), getComputerChoice()));