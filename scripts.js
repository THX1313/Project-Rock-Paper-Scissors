
// let computerScore = 0;
// let playerScore = 0;
// let outcome = document.querySelector('#outcome');
// let round = 1;
// console.log(outcome.innerText);



// // Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
//   const buttons = document.querySelectorAll('button');
//   const buttonArray = Array.from(buttons);
//   buttonArray.forEach((item) => item.addEventListener('click', playRound));

// // Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.

//   function playRound(e) {

//     const playerSelection = (e.target.innerText);
//     console.log(e.target.innerText);
//     round = round + 1;
//     let roundDisplay = document.querySelector('h1');
//     roundDisplay.innerText = `ROUND ${round}`;
//     let computerSelection = getComputerChoice();

//     if (playerSelection === computerSelection) {
//       outcome.innerText = 'You tied!';
//     } else if (
//       (playerSelection === 'rock' && computerSelection === 'scissors') ||
//       (playerSelection === 'paper' && computerSelection === 'rock') ||
//       (playerSelection === 'scissors' && computerSelection === 'paper')) {
//         outcome.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
//         playerScore = playerScore + 1;
//         console.log(playerScore);
//         let playerScoreOutput = document.querySelector('#playerScore');
//         playerScoreOutput.innerText = playerScore;

//     } else {
//       outcome.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
//       computerScore = computerScore + 1;
//       console.log (computerScore);
//       let computerScoreOutput = document.querySelector('#computerScore');
//       computerScoreOutput.innerText = computerScore;
//     }

//     if (playerScore === 5 || computerScore === 5) {
//         if (playerScore === 5) {
//           finalScore = `You were the first to win five times! You're the winner!`;
//           outcome.innerText = finalScore;
//           roundDisplay.innerText = `GAME OVER`;

//         } else if (computerScore === 5) {
//           finalScore = `The computer was the first to win five times! Better luck next time!`;
//           outcome.innerText = finalScore;
//           roundDisplay.innerText = `GAME OVER`;

//         }
//       const updatedButtons = document.querySelectorAll('button');
//       const updatedButtonArray = Array.from(updatedButtons);
//       updatedButtonArray.forEach((item) => item.removeEventListener('click', playRound));
//     }
//   }

// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

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
