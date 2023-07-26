function playRound(playerSelection, computerSelection) {
  const choices = ["rock", "paper", "scissors"];
  if (!choices.includes(playerSelection) || !choices.includes(computerSelection)) {
    return 'Invalid input';
  }

  if (playerSelection === computerSelection) {
    return 'You tied!';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }

  return `You lose! ${computerSelection} beats ${playerSelection}.`;
}

function getPlayerChoice() {
  let playerChoice = prompt('Enter rock, paper, or scissors');
  playerChoice = playerChoice.toLowerCase();
  console.log(`You chose: ${playerChoice}`);
  return playerChoice;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let outcomeOfRound = playRound(getPlayerChoice(), getComputerChoice());
    console.log(`Round ${i}: ${outcomeOfRound}`);

    if (outcomeOfRound.includes('win')) {
      playerScore += 1;
    } else if (outcomeOfRound.includes('lose')) {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won ${playerScore} ${playerScore === 1 ? 'time' : 'times'} out of five! You're the winner!`);
  } else if (playerScore < computerScore) {
    console.log(`You won ${playerScore} ${playerScore === 1 ? 'time' : 'times'} out of five. Better luck next time!`);
  } else if (playerScore === computerScore) {
    console.log(`You won ${playerScore} ${playerScore === 1 ? 'time' : 'times'} out of five, and tied with the computer!`);
  } else {
    console.log('Your input for every round was invalid. Please remember to enter only one of the three valid inputs when prompted (rock, paper, or scissors)!');
  }
}

game();
