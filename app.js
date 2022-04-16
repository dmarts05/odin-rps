let playerSelection = "";
let aiSelection = "";
let winner = false;
let playerScore = 0;
let aiScore = 0;

function checkValidSelection(selection) {
  return ((selection != "rock") && (selection != "scissors") && (selection != "paper"));
}

function askPlayerSelection() {
  do {
    playerSelection = prompt("Rock, Paper or Scissors? ");
    if (playerSelection != null) playerSelection = playerSelection.toLowerCase();
  } while (checkValidSelection(playerSelection));
}
