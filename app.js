let playerSelection = "";
let aiSelection = "";
let winner = false;
let playerScore = 0;
let aiScore = 0;

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