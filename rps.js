console.log("Welcome to the Rock, Paper, Scissors game.");
console.log(" ");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

let humanChoice = '';


function interpComputerChoice(randComputerNumber) {
    switch (randComputerNumber) {
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

function playRound(humanChoice, computerSelection) {
    // tie condition
    if (humanChoice === computerSelection) {
        return "You've tied the round";
    }
    // win condition
    if ((humanChoice === 'rock' && computerSelection === 'scissors') ||
        (humanChoice === 'paper' && computerSelection === 'rock') ||
        (humanChoice === 'scissors' && computerSelection === 'paper')) {
        humanScore++;
        return ("You've win the round");
    }
    // lose condition
    else {
        computerScore++;
        return ("You've lost the round");
    }
}

function endRound(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return ("You win the game!");
    } else if (computerScore > humanScore) {
        return ("The Computer wins the game!");
    } else {
        return ("It's a tie!");
    }
}

// UI
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Game Loop
rockBtn.addEventListener("click", () => {
    let humanChoice = 'rock';
    let randComputerNumber = Math.floor(Math.random() * 3);
    let computerSelection = interpComputerChoice(randComputerNumber);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(humanChoice, computerSelection));
    // print score
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    roundCount += 1;
    console.log(roundCount);

    if (roundCount === 5) {
        endRound(humanScore, computerScore);
        console.log(endRound(humanScore, computerScore));
    }
})

paperBtn.addEventListener("click", () => {
    let humanChoice = 'paper';
    let randComputerNumber = Math.floor(Math.random() * 3);
    let computerSelection = interpComputerChoice(randComputerNumber);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(humanChoice, computerSelection));
    // print score
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    roundCount += 1;
    console.log(roundCount);

    if (roundCount === 5) {
        endRound(humanScore, computerScore);
        console.log(endRound(humanScore, computerScore));
    }
})

scissorsBtn.addEventListener("click", () => {
    let humanChoice = 'scissors';
    let randComputerNumber = Math.floor(Math.random() * 3);
    let computerSelection = interpComputerChoice(randComputerNumber);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(humanChoice, computerSelection));
    // print score
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    roundCount += 1;
    console.log(roundCount);

    if (roundCount === 5) {
        endRound(humanScore, computerScore);
        console.log(endRound(humanScore, computerScore));
    }
})

// Game loop

// Getting choices
/* let humanSelection = prompt("Pick your choice").toLowerCase(); */

// Play round
/* console.log(`You've chosen: ${humanChoice}`) */

/* console.log(playRound(humanChoice, computerSelection)); */

/* console.log(" "); */

// Game end
