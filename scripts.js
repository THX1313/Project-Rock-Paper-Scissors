function playRound(playerSelection, computerSelection) {
  let result = 'Invalid input';
  switch (computerSelection) {
    case "rock":
      if (playerSelection === 'rock') {
        result = 'You tied!';
      } else if (playerSelection === 'paper') {
        result = 'Paper beats rock. You win!';
      } else if (playerSelection === 'scissors') {
        result = 'Rock beats scissors. You loose!';
      }
      break;
    case "paper":
      if (playerSelection === 'rock') {
        result = 'Paper beats rock. You loose!';
      } else if (playerSelection === 'paper') {
        result = 'You tied!';
      } else if (playerSelection === 'scissors') {
        result = 'Scissors beats paper. You win!';
      }
      break;
    case "scissors":
      if (playerSelection === 'rock') {
        result = 'Rock beats scissors. You win!';
      } else if (playerSelection === 'paper') {
        result = 'Scissors beats paper. You loose!';
      } else if (playerSelection === 'scissors') {
        result = 'You tied!';
      }
      break;
    default:
  }
  return result;
}

function getPlayerChoice () {
  let playerChoice = prompt ('Enter rock, paper, or scissors');
  playerChoice = playerChoice.toLowerCase();
  console.log(`You chose: ${playerChoice}`);
  return playerChoice;
}
  
function getComputerChoice () {
  let random_number = Math.floor(Math.random() * 3) +1;
  // Map the random number to the corresponding choice
  if (random_number == 1) {
        return "rock";
    }
  else if (random_number == 2) {
        return "paper";
    }
  else {
        return "scissors";
    }
}

function game () {
  let computerScore = 0;
  let playerScore = 0
  let isValidResult = false;
  
  for (i=1; i<=5; i++) {
    let outcomeOfRound = playRound(getPlayerChoice(), getComputerChoice())
    if (outcomeOfRound.includes('win')) {
      playerScore += 1;
      isValidResult = true;
    } else if (outcomeOfRound.includes('loose')) {
      computerScore += 1;
      isValidResult = true;
    }
    console.log(`Round ${i}: ${outcomeOfRound}`);
  }
  if (playerScore > computerScore) {
    if (playerScore !== 1){
      console.log(`You won ${playerScore} times out of five! You're the winner!`)
    } else {
      console.log(`You won ${playerScore} time out of five! You're the winner!`)
    }
  }
  if (playerScore < computerScore) {
    if (playerScore === 2 || playerScore === 0) {
      console.log(`You won ${playerScore} times out of five. Better luck next time!`);
    } else if (playerScore === 1) {
        console.log(`You won ${playerScore} time out of five. Better luck next time!`);
      }
  }
  if (playerScore === computerScore && isValidResult) {
    if (playerScore >= 2 || playerScore === 0) {
      console.log(`You won ${playerScore} times out of five, and tied with the computer!`);
    } else if (playerScore === 1) {
        console.log(`You won ${playerScore} time out of five, and tied with the computer!`);
    }
  }
  if (!isValidResult) {
    console.log(`Your input for every round was invalid. Please remember to enter only one of the three valid inputs when prompted (rock, paper, or scissors)!`);
  }
}

game();