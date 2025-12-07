console.log("Welcome to the Rock, Paper, Scissors game.");
console.log(" ");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const computerFace = document.querySelector('#computerFace');
const computerHand = document.querySelector('#computerHand');
const playerBar = document.querySelector('#playerBar');

let humanChoice = '';


function interpComputerChoice(randComputerNumber) {
    switch (randComputerNumber) {
        case 0:
            computerHand.textContent = '👊';
            return 'rock';
        case 1:
            computerHand.textContent = '🫲'
            return 'paper';
        case 2:
            computerHand.textContent = '✌️'
            return 'scissors';
        default:
            return 'ERROR WHILE RANDOMIZING NUMBER';
    }
}

function playRound(humanChoice, computerSelection) {
    // tie condition
    if (humanChoice === computerSelection) {
        computerFace.textContent = '😳';
        return "You've tied the round";
    }
    // win condition
    if ((humanChoice === 'rock' && computerSelection === 'scissors') ||
        (humanChoice === 'paper' && computerSelection === 'rock') ||
        (humanChoice === 'scissors' && computerSelection === 'paper')) {
        humanScore++;
        computerFace.textContent = '😣';
        return ("You've won the round");
    }
    // lose condition
    else {
        computerScore++;
        computerFace.textContent = '😏';
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

function gameLoop(humanChoice) {
    // get choices
    let randComputerNumber = Math.floor(Math.random() * 3);
    let computerSelection = interpComputerChoice(randComputerNumber);

    // round status
    const roundMessage = roundText.textContent = playRound(humanChoice, computerSelection);
    console.log(roundMessage);

    // score status
    const scoreMessage = scoreText.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    roundCount += 1;
    console.log(roundCount);

    // player choice text status
    const playerMessage = playerText.textContent = `You've chosen ${humanChoice}`;
    console.log(`You've chosen: ${humanChoice}`);

    // computer choice text status
    const computerMessage = computerText.textContent = `I've chosen ${computerSelection}`;
    console.log(`Computer chose: ${computerSelection}`);

    // end game
    if (roundCount === 5) {
        roundText.textContent = roundMessage + '. ' + endRound(humanScore, computerScore);
        console.log(endRound(humanScore, computerScore));
        // create restart button
        const restartButton = document.createElement('button');
        restartButton.textContent = 'NEW GAME';
        restartButton.classList.add("restartButton");
        restartButton.addEventListener("click", () => {
            console.log('restarted');
            restartGame(restartButton);
        })
        playerBar.appendChild(restartButton);
    }
}

function restartGame(restartButton) {
    roundCount = 0;
    humanScore = 0;
    computerScore = 0;
    roundText.textContent = 'Started a new game.';
    scoreText.textContent = 'SCORE';
    playerText.textContent = 'Pick your choice, again';
    computerText.textContent = "Let's play another round!";
    computerFace.textContent = '😎';
    computerHand.textContent = '🫵';
    restartButton.remove();
}

// UI
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Game Loop
rockBtn.addEventListener("click", () => {
    if (roundCount != 5) {
        gameLoop('rock');
    }
})

paperBtn.addEventListener("click", () => {
    if (roundCount != 5) {
        gameLoop('paper');
    }
})

scissorsBtn.addEventListener("click", () => {
    if (roundCount != 5) {
        gameLoop('scissors');
    }
})