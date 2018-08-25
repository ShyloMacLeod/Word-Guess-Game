document.addEventListener('DOMContentLoaded', function(){ 

// variables
// =============================================================
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordsList = ["gingerbread", "cake" , "cookie", "brownie", "pie", "truffle", "pastry", "donut", "snickerdoodle" , "milkshake", "cobbler", "fudge", "pudding", "eclair", "caramel", "chocolate", "cupcake"];
var wins = 0;
var losses = 0;
var maxTries = 8;
var guessesLeft = 0;
// Word we will build to match randomWord
var currentWord = [];
// Tracks incorrectly guessed letters
var guessedLetters = [];
// End of game and start over
var gameOver = false;

// reset game to start and clear arrays
function resetGame() {
    guessesLeft = maxTries;
    currentWord = [];
    guessedLetters = [];

// word chosen at random from wordList
var randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];

// Insert underscores for length of word
for (var i = 0; i < randomWord.length; i++) {
guessingWordIndex[i]  = "_";
guessingWordIndex = randomword.join("");
}
updateDisplay ();
};

// Update display to start game/new game
function updateDisplay() {
    document.getElementById("wins-text").innerText = wins;
    document.getElementById("losses-text").innerText = losses;
    document.getElementById("current-word").innerText = "";
    for (var i = 0; i < currentWord.length; i++) {
        document.getElementById("current-word").innerText += currentWord[i];
    }
    document.getElementById("remaining-guesses").innerText = guessesLeft;
    document.getElementById("guessed-letters").innerText = guessedLetters;
        if(guessesLeft <=0) {
            alert("You lose, try again.");
            gameOver = true;
        }
};

// Get a guess from player
document.onkeyup = function(event) {
if(gameOver) {
    resetGame();
    gameOver = false;
}
else {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    makeGuess(event.key.toUpperCase());
    }
}
};

// Check that players guess is a valid guess
function makeGuess(letter) {
if(guessesLeft > 0) {
if(guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    checkGuess(letter);
}
}
updateDisplay();
checkWin();
};

// Find and replace all instances of letter in string and puts them in currentWord
function checkGuess(letter) {
    var places = [];
    for(var i = 0; wordsList[guessingWordIndex].length; i++) {
        if(wordsList[guessingWordIndex][i] === letter){
            places.push(i);
        }
    }
        if(places.length <= 0) {
            guessesLeft--;
        }
        else {
            for(var i = 0; i < places.length; i++) {
            currentWord[places[i]] = letter;
        }
    }
};

// Check to see if all underscores have been replaced and word solved
function checkWin() {
    if(currentWord.indexOf("_") === -1) {
        alert ("You win!")
        wins++;
        gameOver = true;
    }
    console.log (guessingWordIndex);
}
}, false);