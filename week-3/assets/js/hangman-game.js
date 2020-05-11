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

    I have also created a veriable that contains the "hangman" art in hangman-ascii.js, you can test what these look like by running:
    hangmanOutput
    hangmanOutput[0]
    hangmanOutput[1]
    etc
*/

var lives = null; //Amount of lives remaining
var status = null; //Status of the game
var word = null; //The word that we are trying to giess
var displayedWord = null; //The word that is shown to the use e.g "_ _ _ _  _ _ _"

function newGame() {
    lives = 7;
    stats = "game started"
    word = words[Math.floor(Math.random() * words.length)];

    console.log('Type guess("X"), where X is the letter you would like to guess.');
}

function buildDisplayedWord(letter) {
    return letter;
}

function guess(letter) {
    //Rebuild the word to display
    displayedWord = buildDisplayedWord(letter);

    //Output the letter guessed
    console.log(letter);
}

//Start a new game when the page loads
newGame();