let Result = document.getElementById("result");
let choice = ["Rock", "Paper", "Scissor"];
let yourScore = document.getElementById("yScore");
let computerScore = document.getElementById("cScore");
let displayMyChoice = document.getElementById("yourChoice");
let displayComputerChoice = document.getElementById("computerChoice");
let myScore = 0;
let coScore = 0;

function Calculate(myChoice) {
  // Corrected the random choice generation logic
  let computerChoice = choice[Math.floor(Math.random() * 3)];
  displayMyChoice.textContent = `You Have Chosen ${myChoice}!`;
  displayComputerChoice.textContent = `Computer Have Chosen ${computerChoice}!`;

  if (computerChoice == myChoice) {
    Result.textContent = "It's a draw😑";
  } else if (myChoice == "Rock" && computerChoice == "Scissor") {
    Result.textContent = "You Won😁";
    myScore++;
  } else if (myChoice == "Paper" && computerChoice == "Rock") {
    Result.textContent = "You Won😁";
    myScore++;
  } else if (myChoice == "Scissor" && computerChoice == "Paper") {
    Result.textContent = "You Won😁";
    myScore++;
  } else {
    Result.textContent = "Oop's You Lost😥";
    coScore++;
  }

  // Update the score display
  yourScore.textContent = `Your Score : ${myScore}`;
  computerScore.textContent = `Computer's Score : ${coScore}`;

  Result.classList.remove("green", "red");

  switch (Result.textContent) {
    case "You Won😁":
      Result.classList.add("green");
      break;
    case "Oop's You Lost😥":
      Result.classList.add("red");
      break;
  }
}
