console.log("Welcome to the Rock, Paper, Scissors game.");
console.log(" ");

// 0 - rock, 1 - paper, 2 - scissors

let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;

function getComputerChoice(computerInput) {
    if (computerInput == 0) {
        return 'rock';
    }
    else if (computerInput == 1) {
        return 'paper';
    }
    else if (computerInput == 2) {
        return 'scissors';
    }
}

function getHumanChoice(humanInput) {
    return humanInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // win condition
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return ("You've win the round");
    }
    // lose condition
    else if ((humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        return ("You've lost the round");
    }
    // tie condition
    else if (humanChoice === computerChoice) {
        return "You've tied the round";
    }
}

for (let i = 0; i < totalRounds; i++) {
    // Choices
    let humanInput = prompt("Pick your choice");
    let computerInput = Math.floor(Math.random() * 3);

    // Getting choices
    let humanSelection = getHumanChoice(humanInput);
    let computerSelection = getComputerChoice(computerInput);

    // Play round
    console.log(`You've chosen: ${humanSelection}`)
    console.log(`Computer chose: ${computerSelection}`)
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    console.log(" ");
}

if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("The Computer wins the game!");
} else {
    console.log("It's a tie!");
}