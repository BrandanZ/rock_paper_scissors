function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    playerWins++;
                    return "You win! Rock beats scissors.";
                }
                else {
                    computerWins++;
                    return "You lose! Paper beats rock.";
                }
            
            case "paper":
                if (computerSelection === "scissors") {
                    computerWins++;
                    return "You lose! Scissors beats paper."
                }
                else {
                    playerWins++;
                    return "You win! Paper beats rock."
                }

            case "scissors":
                if (computerSelection === "paper") {
                    playerWins++;
                    return "You win! Scissors beats paper."
                }
                else {
                    computerWins++;
                    return "You lose! Rock beats scissors."
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

function game() {
    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Please choose rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

let computerWins = 0;
let playerWins = 0;

game();

if (playerWins > computerWins) {
    console.log(`You win ${playerWins} to ${computerWins}`);
} else if (playerWins < computerWins) {
    console.log(`You lose ${computerWins} to ${playerWins}`);
} else {
    console.log(`It's a tie ${computerWins} to ${playerWins}`);
}