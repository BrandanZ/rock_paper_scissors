function playRound(playerSelection, computerSelection) {
    // your code here!
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));