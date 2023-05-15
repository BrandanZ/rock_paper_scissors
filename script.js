let resultsDiv = document.querySelector('.results');
let scoreDiv = document.querySelector('.score');
let winnerDiv = document.querySelector('.winner');

function updateScore() {
    scoreDiv.textContent = `Player: ${playerWins}, Computer: ${computerWins}`;
}

function checkWinner() {
    if (playerWins === 5) {
        winnerDiv.textContent = "You beat the computer! 😀";
        return true;
    } else if (computerWins === 5) {
        winnerDiv.textContent = "You lost to the computer 😢";
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection) {
    if (checkWinner()) {
        return;
    }
    if (playerSelection === computerSelection) {
        resultsDiv.textContent = "It's a tie.";
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    playerWins++;
                    resultsDiv.textContent = "You win! Rock beats scissors.";
                }
                else {
                    computerWins++;
                    resultsDiv.textContent = "You lose! Paper beats rock.";
                }
                break;
            
            case "paper":
                if (computerSelection === "scissors") {
                    computerWins++;
                    resultsDiv.textContent = "You lose! Scissors beats paper."
                }
                else {
                    playerWins++;
                    resultsDiv.textContent = "You win! Paper beats rock."
                }
                break;

            case "scissors":
                if (computerSelection === "paper") {
                    playerWins++;
                    resultsDiv.textContent = "You win! Scissors beats paper."
                }
                else {
                    computerWins++;
                    resultsDiv.textContent = "You lose! Rock beats scissors."
                }
                break;
        }
    }
    updateScore();
    checkWinner();
}

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

let buttonContainer = document.getElementById('buttonContainer');
buttonContainer.addEventListener('click', function(e) {
    let targetButton = e.target;
    if (targetButton.tagName.toLowerCase() === 'button') {
        let playerSelection = targetButton.className.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
    }
});

let computerWins = 0;
let playerWins = 0;