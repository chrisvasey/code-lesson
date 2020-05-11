/*
    Today we are going to work on creating a text version of hangman.
    At the start of the game, we will get a random word from the "words" array, I have put this in the words.js file as it is long.

    The user will then make a guess using a function called guess().

    The users should be able to make a guess by running the following in the console:
    guess("h");

    And the output should look something like this:
    You guessed: "H"

    H _ _ _  _ _ _

    +---+
    |   |
        |
        |
        |
        |
    =========
    You have 7 lives remaining.
*/

var lives = null;
var status = null;

function newGame() {
    var lives = 7;
    var stats = "game started"
    console.log('Type guess("X"), where X is the letter you would like to guess.');
}

function guess(letter) {

    //Output the letter guessed
    console.log(letter);
}

//Start a new game when the page loads
newGame();