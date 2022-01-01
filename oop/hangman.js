const Hangman = function (word, guesses) {
	this.word = word.toLowerCase().split("");
	this.guesses = guesses;
	this.guessedLetters = ["e", "h", "i"];
};

Hangman.prototype.getPuzzle = function () {
	let puzzle = "";
	this.word.forEach((letter) => {
		if (this.guessedLetters.includes(letter.toLowerCase()) || letter === " ") {
			puzzle += letter;
		} else {
			puzzle += "*";
		}
	});
	return puzzle;
};

const game1 = new Hangman("Michael", 5);
const game2 = new Hangman("New Hampshire", 4);
console.log(game1.word);
console.log(game2.word);
console.log(game2.getPuzzle());
