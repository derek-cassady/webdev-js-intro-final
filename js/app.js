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

// game vars (global scope)

// computerGuess
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
// assigns var 'history' to a blank array to be added to

// handle guesses
function handleGuess() {
    const guess = Number(guessInput.value);
    // get player guess from element "guessInput"
    
    // validation
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
    // update guess history array

    //update readouts
    currentGuess.textContent = guess;
    // puts the player guess into the DOM "currentGuess"
    
    guessHistory.textContent = history.join(", ");
    // joins the guesses in the array with a ", " between them
    // updates DOM "guessHistory" with the array turned into a readable list

    // guess logic

    // win
    if (guess === randomNumber) {
        // guess is equal to "computerGuess"/var "randomNumber"
        guessMessage.textContent = "Congratulations! You guessed the correct number!";
        // updates DOM "guessMessage" with string
        computerGuess.textContent = randomNumber;
        // updates DOM "computerGuess" var "randomNumber" to show match
        endGame(true);
        // call function "endGame" to run with win conditions (true)
    } 
    
    // lose
    else if (attempts >= maxAttempts) {
        // checks attempts versus var "maxAttempts"
        guessMessage.textContent = "Game over! You've used all your attempts.";
        // updates DOM "guessMessage" with string
        computerGuess.textContent = randomNumber;
        // updates DOM "computerGuess" var "randomNumber" to show winning condition
        endGame(false);
        // call function "endGame" to run with lose conditions (false)
    } 
    
    // too low
    else if (guess < randomNumber) {
        // checks guess versus "computerGuess"/var "randomNumber"
        guessMessage.textContent = "Too low! Try again.";
        // updates DOM "guessMessage" with string
    } 
    
    // too high (all other conditions covered, only need "else" for message")
    else {
        guessMessage.textContent = "Too high! Try again.";
        // updates DOM "guessMessage" with string
    }
}

// end game
function endGame(isWin) {
    
    // set button conditions from readme
    
    submitBtn.disabled = true;
    // disables submit button "submitBtn"
    
    restartBtn.disabled = false;
    // enables restart button "restartBtn"

    guessInput.disabled = true;
    // disables guess input box "guessInput"

    if (isWin) {
    // parameter for "true" called by "handleGuess"
        
        guessMessage.textContent += " Well done!";
        // updates DOM "guessMessage" with string appended to it 
    
    } else {
    // parameter for "false" called by "handleGuess"
        
        guessMessage.textContent += " Better luck next time!";
        // updates DOM "guessMessage" with string appended to it
    }
}

// restart game
function restartGame() {
    // reset all values of the game per the readme
    // global scope variables update
    // maxAttmepts is immutable
    
    randomNumber = Math.floor(Math.random() * 10) + 1;
    // Math.random() gives number between 0 and 1
    // *10 to get a number between 0 and 10
    // Math.floor() Rounds down the decimal to a whole number
    // +1 makes sure the range is 1 - 10
    
    attempts = 0;
    // track the number of guesses
    
    history = [];
    // assigns var 'history' to a blank array to be added to
}

// event listeners
submitBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", restartGame);