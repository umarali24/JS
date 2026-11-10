num = parseInt(Math.floor(Math.random() * 100) + 1);

const ip = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const message = document.querySelector("#message");
const prevGuess = document.querySelector("#previousGuess");
const attempts = document.querySelector("#remainingAttempts");
const newGameBtn = document.querySelector("#newGameBtn");

let guessCount = 0;
let guesses = [];

let playGame = true;


if (playGame) {
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        ValidateGuess(ip);
    });
    newGameBtn.addEventListener("click", function(e) {
        e.preventDefault();
        resetGame();
    });
}

function ValidateGuess(ip){
    if (!playGame) return;
    if (ip.value === "") {
        alert("Please enter a number.");
        return;
    }
    input_value = parseInt(ip.value);
    if (input_value < 1 || input_value > 100) {
        alert("Please enter a number between 1 and 100.");
    } else if (isNaN(input_value)) {
        alert("Please enter a valid number.");
    } else {
        guessCount++;
        guesses.push(input_value);
        checkGuess(input_value);
    }
}

function checkGuess(input_value){
    if (input_value === num) {
        message.textContent = `Congratulations! You guessed the number. ${num} is correct.`;
        playGame = false;
        submitBtn.disabled = true;
    } else if (guessCount === 10) {
        message.textContent = `Game over! You've used all your attempts. The number was ${num}.`;
        playGame = false;
        submitBtn.disabled = true;
    } else {
        message.textContent = "Oops! Try again, you guessed is wrong value.";
    }
    prevGuess.textContent = guesses.join(", ");
    attempts.textContent = 10 - guessCount;
}

function resetGame() {
    num = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    guesses = [];
    playGame = true;
    
    submitBtn.disabled = false;
    ip.value = "";
    message.textContent = "";
    prevGuess.textContent = "";
    attempts.textContent = 10;
}
