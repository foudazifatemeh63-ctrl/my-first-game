let secretNumber = Math.floor(Math.random() * 10) + 1;

console.log(secretNumber);

let guessInput = document.getElementById("guess");
let guessButton = document.getElementById("guessButton");
let attemptsText = document.getElementById("attempts");
let result = document.getElementById("result");
let restartButton = document.getElementById("restartButton");

let attempts = 0;

guessButton.addEventListener("click", function() {
    attempts++;

    attemptsText.textContent = "تلاش: " + attempts;

    console.log(attempts);
    console.log("دکمه کلیک شد");
    console.log(guessInput.value);

    if (guessInput.value == secretNumber) {
        result.textContent = "درست حدس زدی";
    }
    else if (guessInput.value > secretNumber) {
        result.textContent = "عدد کوچک‌تر را امتحان کن";
    }
    else {
        result.textContent = "عدد بزرگ‌تر را امتحان کن";
    }
});

let userGuess = guessInput.value;

console.log(userGuess);

restartButton.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    attemptsText.textContent = "تلاش: 0";
    guessInput.value = "";
    result.textContent = "نتیجه اینجا نمایش داده می‌شود";

    console.clear();
});