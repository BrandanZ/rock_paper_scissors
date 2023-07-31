let computerWins = 0;
let playerWins = 0;

const resultsDiv = document.querySelector('.results');
const playerScoreDiv = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');
const winnerDiv = document.querySelector('.winner');
const replayButton = document.querySelector('#replayButton');

resultsDiv.style.fontSize = '20px';

function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);

    switch(number) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";
        
        case 2:
            return "scissors";
    }
}

function getResultMessage(playerSelection, computerSelection, result) {
    const winMessage = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    const loseMessage = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;

    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else {
        return result ? winMessage : loseMessage;
    }
}


function playRound(playerSelection, computerSelection) {
    if (checkWinner()) {
        return;
    }
    let result;
    switch (playerSelection) {
        case "rock":
            result = computerSelection === "scissors";
            break;
        case "paper":
            result = computerSelection === "rock";
            break;
        case "scissors":
            result = computerSelection === "paper";
            break;
    }
    result ? playerWins++ : computerWins++;
    resultsDiv.textContent = getResultMessage(playerSelection, computerSelection, result);
    updateScore();
    checkWinner();
}

function updateScore() {
    playerScoreDiv.textContent = `Player: ${playerWins}`;
    computerScoreDiv.textContent = `Computer: ${computerWins}`
}

function checkWinner() {
    let winner = null;
    if (playerWins === 5) {
        winner = "You beat the computer! 😀";
    } else if (computerWins === 5) {
        winner = "You lost to the computer 😢";
    }
    if (winner) {
        winnerDiv.textContent = winner;
        document.getElementById('replayButton').classList.remove('hidden');
        return true;
    }
    return false;
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    updateScore();
    resultsDiv.textContent = '';
    winnerDiv.textContent = '';
    document.getElementById('replayButton').classList.add('hidden');
}

const buttonContainer = document.querySelector('#buttonContainer');
buttonContainer.addEventListener('click', function(e) {
    let playerSelection = e.target.className.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

replayButton.addEventListener('click', resetGame);