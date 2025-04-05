const hoverSection = document.querySelector('.hover');
const hoverPlayBtn = document.querySelector('.hover-play-btn');

hoverPlayBtn.addEventListener('click', () => {
    hoverSection.classList.add('hide-hover');
    setInterval (function() {
        hoverSection.classList.add('hover-hidden');
    }, 990);
})

const humanScore = document.querySelector('#human-score');
const computerScore = document.querySelector('#computer-score');
const playBtns = document.querySelectorAll('.game-screen-row-btn');
const results = document.querySelector('.game-screen-results');

humanScore.textContent = 0;
computerScore.textContent = 0;


playBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.currentTarget.value, getComputerChoice());
    })
})

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

function playRound(humanChoice, computerChoice) {
        
    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! You both picked ${humanChoice}!`;
    } else if 
        ( (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ) {
            computerScore.textContent++;
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    } else if
        ( (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ) {
            humanScore.textContent++;
            results.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
    }
}