const Hangman = function (word, guesses) {
	this.word = word.toLowerCase().split("");
	this.guesses = guesses;
	this.guessedLetters = [];
	this.status = "playing";
};

Hangman.prototype.message = function () {
	const message =
		this.status === "playing"
			? `Guesses left: ${this.guesses}`
			: this.status === "failed"
			? `Nice try! the word was: ${this.word.join("")}`
			: "Great work! You Guessed the word";
	return message;
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
	console.log(this.status);
	if (this.status !== "playing") {
		return;
	}
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
	if (lose) {
		this.status = "failed";
	} else if (!win) {
		this.status = "playing";
	} else if (win) {
		this.status = "finished";
	}
};

const renderGame = function (game, puzzle, message, play) {
	puzzle.textContent = game1.getPuzzle();
	const incorrectLetters = game.guessedLetters.filter(
		(letter) => !game.word.includes(letter)
	);
	message.textContent = incorrectLetters.join(", ");
	play.textContent = game.message();
};
