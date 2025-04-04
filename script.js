let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomValue = Math.random();

    if (randomValue <= 0.33) {
        return 'rock';
    } else if (randomValue > 0.33 && randomValue <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
   let humanChoice = prompt("Type in: Rock, Paper or Scissors");
   return humanChoice.toLowerCase();
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both picked ${humanChoice}\nScore: Human - ${humanScore}, Computer - ${computerScore}`);
        } else if 
        ( (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!\nScore: Human - ${humanScore}, Computer - ${computerScore}`);
        } else if
        ( (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ) {
            humanScore++;
            console.log(`You won! ${humanChoice} beats ${computerChoice}!\nScore: Human - ${humanScore}, Computer - ${computerScore}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Congratulations!\nFinal Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game! Try again!\nFinal Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else if (humanScore === computerScore) {
        console.log(`It's a tie! Try again!\nFinal Score: Human - ${humanScore}, Computer - ${computerScore}`);
    }
}

playGame();