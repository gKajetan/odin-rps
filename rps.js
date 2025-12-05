console.log("Welcome to the Rock, Paper, Scissors game.");
console.log(" ");

let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;

function interpComputerChoice(randComputerNumber) {
    switch(randComputerNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'ERROR WHILE RANDOMIZING NUMBER';
    }
}

function playRound(humanChoice, computerChoice) {
    // tie condition
    if (humanChoice === computerChoice) {
        return "You've tied the round";
    }
    // win condition
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return ("You've win the round");
    }
    // lose condition
    else {
        computerScore++;
        return ("You've lost the round");
    }
}

// UI
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    console.log('Rock Chosen');
})

paperBtn.addEventListener("click", () => {
    console.log('Paper Chosen');
})

scissorsBtn.addEventListener("click", () => {
    console.log('Scissors Chosen');
})

// Game loop
for (let i = 0; i < totalRounds; i++) {
    // Randomize computer choice based on randomized number (0-3 / 0 - rock, 1 - paper, 2 - scissors)
    let randComputerNumber = Math.floor(Math.random() * 3);

    // Getting choices
    let humanSelection = prompt("Pick your choice").toLowerCase();
    let computerSelection = interpComputerChoice(randComputerNumber);

    // Play round
    console.log(`You've chosen: ${humanSelection}`)
    console.log(`Computer chose: ${computerSelection}`)
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    console.log(" ");
}

// Game end
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("The Computer wins the game!");
} else {
    console.log("It's a tie!");
}