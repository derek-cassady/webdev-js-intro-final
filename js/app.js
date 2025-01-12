"use strict";

// DOM elements from index.html

// inputs
const guessInput = document.getElementById("guess-input"); // line 20

// readout
const guessMessage = document.getElementById("guess-message"); //line 25
const currentGuess = document.getElementById("current-guess"); //line 27
const computerGuess = document.getElementById("computer-guess"); //line 30
const guessHistory = document.getElementById("guess-history"); //line 33

//buttons
const submitBtn = document.getElementById("submit-btn"); //line 38
const restartBtn = document.getElementById("restart-btn"); //line 39

// game vars
let randomNumber = Math.floor(Math.random() * 10) + 1; 
// Math.random() gives number between 0 and 1
// *10 to get a number between 0 and 10
// Math.floor() Rounds down the decimal to a whole number
// +1 makes sure the range is 1 - 10
let attempts = 0; 
// track the number of guesses
const maxAttempts = 3; 
// max allowed guesses
let history = []; 
// assigns var 'history' to a blank list to be added to

// handle guesses
function handleGuess() {
    const guess = Number(guessInput.value);
    // get player guess from element "guessInput"
    if (!guess || guess < 1 || guess > 10 || !Number.isInteger(guess)) {
        // "!guess" logical "NOT" checks if falsy value
        // "guess < 1" check if greater than 1
        // "guess > 10" check if less than 10
        // "!Number.isInteger(guess)" logical "NOT" makes sure input is a whole number
        // "||" logical "OR"
        guessMessage.textContent = "Please enter a whole number between 1 and 10.";
        // error message for failed validation
        return; 
        // exit if input failed validation
    }

    // attempt counter
    attempts = attempts + 1;
    // increment attempt counter
    
    // guess history
    history.push(guess);
    // update guess history list
}

// end game
function endGame(isWin) {

}

// restart game
function restartGame() {

}

// event listeners
submitBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", restartGame);