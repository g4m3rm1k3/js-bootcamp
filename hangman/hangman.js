const Hangman = function (word, guesses) {
	this.word = word.toLowerCase().split("");
	this.guesses = guesses;
	this.guessedLetters = [];
	this.status = "playing";
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

Hangman.prototype.guess = function (letter) {
	letter = letter.toLowerCase();
	if (!this.guessedLetters.includes(letter) && this.word.includes(letter)) {
		this.guessedLetters.push(letter);
	} else if (!this.guessedLetters.includes(letter)) {
		this.guessedLetters.push(letter);
		this.guesses--;
	} else {
		this.guessedLetters;
	}
	this.playing();
};

Hangman.prototype.playing = function () {
	const win = this.word.every((letter) => this.guessedLetters.includes(letter));
	const lose = this.guesses === 0;
	if (!win && !lose) {
		this.status = "playing";
	} else if (win) {
		this.status = "finished";
	} else {
		this.status = "failed";
	}
};
