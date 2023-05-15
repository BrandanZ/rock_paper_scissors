let resultsDiv = document.querySelector('.results');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultsDiv.textContent = "It's a tie.";
    }
    else {
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
            
            case "paper":
                if (computerSelection === "scissors") {
                    computerWins++;
                    resultsDiv.textContent = "You lose! Scissors beats paper."
                }
                else {
                    playerWins++;
                    resultsDiv.textContent = "You win! Paper beats rock."
                }

            case "scissors":
                if (computerSelection === "paper") {
                    playerWins++;
                    resultsDiv.textContent = "You win! Scissors beats paper."
                }
                else {
                    computerWins++;
                    resultsDiv.textContent = "You lose! Rock beats scissors."
                }
        }
    }
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

function playGame() {
    // if (playerWins > computerWins) {
    //      console.log(`You win ${playerWins} to ${computerWins}`);
    // } else if (playerWins < computerWins) {
    //      console.log(`You lose ${computerWins} to ${playerWins}`);
    // } else {
    //      console.log(`It's a tie ${computerWins} to ${playerWins}`);
    // }
}

let buttonContainer = document.getElementById('buttonContainer');
buttonContainer.addEventListener('click', function(e) {
    let targetButton = e.target;
    if (targetButton.tagName.toLowerCase() === 'button') {
        let playerSelection = targetButton.className.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
});


let computerWins = 0;
let playerWins = 0;

playGame();