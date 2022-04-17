let playerSelection = "";
let aiSelection = "";
let playerScore = 0;
let aiScore = 0;
let keepPlaying = true;

function checkValidSelection(selection) {
  return selection != "rock" && selection != "scissors" && selection != "paper";
}

function askPlayerSelection() {
  do {
    playerSelection = prompt("Rock, Paper or Scissors? ");
    if (playerSelection != null)
      playerSelection = playerSelection.toLowerCase();
  } while (checkValidSelection(playerSelection));
}

function generateAiSelection() {
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      aiSelection = "rock";
      break;
    case 1:
      aiSelection = "paper";
      break;
    case 2:
      aiSelection = "scissors";
      break;
    default:
      aiSelection = "error";
  }
}

function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, aiSelection) {
  if (playerSelection === aiSelection) {
    return `It's a Tie! ${capitalizeFirstChar(playerSelection)} can't beat ${capitalizeFirstChar(aiSelection)}`;
  } else if (
    (playerSelection === "rock" && aiSelection === "scissors") ||
    (playerSelection === "paper" && aiSelection === "rock") ||
    (playerSelection === "scissors" && aiSelection === "paper")
  ) {
    playerScore++;
    return `You Win! ${capitalizeFirstChar(playerSelection)} beats ${capitalizeFirstChar(aiSelection)}`;
  } else {
    aiScore++;
    return `You Lose! ${capitalizeFirstChar(aiSelection)} beats ${capitalizeFirstChar(playerSelection)}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    askPlayerSelection();
    generateAiSelection();
    console.log(playRound(playerSelection, aiSelection));
  }

  if (playerScore === aiScore) {
    console.log(`Game Result:\nIt's a Tie! ${playerScore} - ${aiScore}`);
  } else if (playerScore > aiScore) {
    console.log(`Game Result:\nYou Win! ${playerScore} - ${aiScore}`);
  } else {
    console.log(`Game Result:\nYou Lose! ${playerScore} - ${aiScore}`);
  }

  playerScore = 0;
  aiScore = 0;
}