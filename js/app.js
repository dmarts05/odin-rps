function generateAiSelection() {
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "error";
  }
}

function playRound() {
  const playerSelection = this.getAttribute("id");
  const aiSelection = generateAiSelection();
  resetRoundResultIcon();

  if (playerSelection === aiSelection) {
    roundResultIcon.classList.add("fa-minus");
  } else if (
    (playerSelection === "rock" && aiSelection === "scissors") ||
    (playerSelection === "paper" && aiSelection === "rock") ||
    (playerSelection === "scissors" && aiSelection === "paper")
  ) {
    roundResultIcon.classList.remove("fa-minus");
    roundResultIcon.classList.add("fa-check");
    playerScore++;
  } else {
    roundResultIcon.classList.remove("fa-minus");
    roundResultIcon.classList.add("fa-xmark");
    aiScore++;
  }

  rounds++;
  updateRoundNumber();
  updateScoreIcons();
}

function updateRoundNumber() {
  roundNumber.textContent = `ROUND ${rounds}`;
}

function updateScoreIcons() {
  playerScoreIcons.forEach((icon) => {
    icon.classList.add("fa-circle-dot");
    icon.classList.remove("fa-circle");
  });

  aiScoreIcons.forEach((icon) => {
    icon.classList.add("fa-circle-dot");
    icon.classList.remove("fa-circle");
  });

  for (let i = 0; i < playerScore; i++) {
    playerScoreIcons[i].classList.remove("fa-circle-dot");
    playerScoreIcons[i].classList.add("fa-circle");
  }

  for (let i = 0; i < aiScore; i++) {
    aiScoreIcons[i].classList.remove("fa-circle-dot");
    aiScoreIcons[i].classList.add("fa-circle");
  }

  if (playerScore >= 5 || aiScore >= 5) {
    endGame();
  }
}

function resetRoundResultIcon() {
  roundResultIcon.classList.remove("fa-check");
  roundResultIcon.classList.remove("fa-xmark");
}

function endGame() {
  options.forEach((option) => option.removeEventListener("click", playRound));
  if (playerScore < aiScore) {
    gameResult.textContent = "YOU LOST!";
    gameResult.setAttribute(
      "style",
      "display: block; background: linear-gradient(-45deg, white, red); -webkit-background-clip: text; animation: gradient 2.5s ease infinite; background-size: 400% 400%"
    );
  } else {
    gameResult.style.display = "block";
  }

  btnReload.style.display = "block";
}

let playerScore = 0;
let aiScore = 0;
let rounds = 1;
const options = document.querySelectorAll(".option");
const roundNumber = document.querySelector(".round");
const roundResultIcon = document.querySelector(".round-result i");
const playerScoreIcons = document.querySelectorAll(".player-score i");
const aiScoreIcons = document.querySelectorAll(".ai-score i");
const gameResult = document.querySelector(".game-result h2");
const btnReload = document.querySelector(".btn-reload");

options.forEach((option) => option.addEventListener("click", playRound));
