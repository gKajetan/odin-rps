console.log("Welcome to the Rock, Paper, Scissors game.");

// 0 - rock, 1 - paper, 2 - scissors
/* console.log(randomChoice); */

let randomChoice = Math.floor(Math.random() * 3);
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (randomChoice == 0) {
        return 'Rock';
    }
    else if (randomChoice == 1) {
        return 'Paper';
    }
    else if (randomChoice == 2) {
        return 'Scissors';
    }
}

let humanChoice = prompt("Pick your choice")

function getHumanChoice() {
    if (humanChoice == 'rock') {
        return 0;
    }
    if (humanChoice == 'paper') {
        return 1;
    }
    if (humanChoice == 'scissors') {
        return 2;
    }
}


console.log(randomChoice);
console.log("I've chosen " + getComputerChoice());


console.log(getHumanChoice());