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
// assigns var 'history' to a blank array to be added to