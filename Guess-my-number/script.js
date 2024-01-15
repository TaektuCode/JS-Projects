"use strict";
/* GLOBAL VARIABLES */
// Generate a random/secret number
// "*20 + 1" because Math.trunc will cut 19.99999 to 19.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score variable
let score = 20;
// Highscore variable
let highscore = 0;

/*GLOBAL FUNCTIONS*/

// Text content update
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Score Content update
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

// Score update
const updateScore = () => {
  score--;
  displayScore(score);
};

// Number content update
const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("❌️ No number!");
  }

  // When input is greater then 20 or lower then 1
  else if (guess > 20 || guess < 0) {
    displayMessage("❌️ Pick a number between 1 and 20!");
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉️ Correct number!");
    displayNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "👎️ Too high!" : "👎️ Too Low!");
      updateScore();
    } else {
      displayMessage("💥️ You lost the game!");
      displayScore(0);
    }
  }
});

// Reset the game
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing....");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
