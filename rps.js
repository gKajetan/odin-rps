console.log("Welcome to the Rock, Paper, Scissors game.");

// 0 - rock, 1 - paper, 2 - scissors
/* console.log(randomChoice); */

let computerChoice = Math.floor(Math.random() * 3);
let humanChoice = prompt("Pick your choice");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (computerChoice == 0) {
        return 'Rock';
    }
    else if (computerChoice == 1) {
        return 'Paper';
    }
    else if (computerChoice == 2) {
        return 'Scissors';
    }
}

function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock') {
        return 0;
    }
    if (humanChoice.toLowerCase() === 'paper') {
        return 1;
    }
    if (humanChoice.toLowerCase() === 'scissors') {
        return 2;
    }
}

console.log("I've chosen " + getComputerChoice() + ' (' + computerChoice + ')');

console.log('Your choice:' + getHumanChoice() + ' (' + humanChoice + ')');