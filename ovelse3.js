window.addEventListener("load", onLoad);
//assigned a random number between 0 and 10
let randomNumber = Math.floor(Math.random() * 10);

//made to store a reference to the results paragraphs in our HTML, and are used to insert values into the paragraphs later on in the code
let guesses;
let lastResult;
let lowOrHi;

//store references to the form text input and submit button and are used to control submitting the guess
let guessSubmit;
let guessField;

//store a guess count of 1 (used to keep track of how many guesses the player has had), and a reference to a reset button
let guessCount = 1;
let resetButton;

function onLoad() {
  lowOrHi = document.querySelector(".lowOrHi");
  lastResult = document.querySelector(".lastResult");
  guesses = document.querySelector(".guesses");
  guessField = document.querySelector(".guessField");
  guessSubmit = document.querySelector(".guessSubmit");

  guessSubmit.addEventListener("click", checkGuess);
  console.log(guessSubmit);
}

function checkGuess() {
  //declares a variable called userGuess and sets its value to the current value entered inside the text field
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 10);
}
