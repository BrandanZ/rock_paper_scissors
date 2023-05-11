function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    return "You win! Rock beats scissors.";
                }
                else {
                    return "You lose! Paper beats rock.";
                }
            
            case "paper":
                if (computerSelection === "scissors") {
                    return "You lose! Scissors beats paper."
                }
                else {
                    return "You win! Paper beats rock."
                }

            case "scissors":
                if (computerSelection === "paper") {
                    return "You win! Scissors beats paper."
                }
                else {
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

game();