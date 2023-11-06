
let computerScore = 0;
let playerScore = 0;
let round = 1;

const outcome = document.querySelector('#outcome');
const roundDisplay = document.querySelector('h1');
const playerScoreOutput = document.querySelector('#playerScore');
const computerScoreOutput = document.querySelector('#computerScore');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});

function playRound(e) {
  const playerSelection = e.target.innerText;
  round++;
  roundDisplay.innerText = `ROUND ${round}`;

  const computerSelection = getComputerChoice();
  let resultMessage = '';

  if (playerSelection === computerSelection) {
    resultMessage = 'You tied!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++;
    playerScoreOutput.innerText = playerScore;
  } else {
    resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
    computerScoreOutput.innerText = computerScore;
  }

  if (playerScore === 5 || computerScore === 5) {
    let finalScore = '';
    if (playerScore === 5) {
      finalScore = `You were the first to win five times! You're the winner!`;
    } else {
      finalScore = `The computer was the first to win five times! Better luck next time!`;
    }
    
    outcome.innerText = finalScore;
    roundDisplay.innerText = `GAME OVER`;

    buttons.forEach((button) => {
      button.removeEventListener('click', playRound);
    });
  } else {
    outcome.innerText = resultMessage;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
