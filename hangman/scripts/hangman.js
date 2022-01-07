class Hangman {
	constructor(word, guesses) {
		this.word = word.toLowerCase().split("");
		this.guesses = guesses;
		this.guessedLetters = [];
		this.status = "playing";
		this.spaces = false;
	}

	get message() {
		const newLocal =
			this.status === "playing"
				? `Guesses left: ${this.guesses}`
				: this.status === "failed"
				? `Nice try! the word was: ${this.word.join("")}`
				: "Great work! You Guessed the word";
		return newLocal;
	}

	get puzzle() {
		let puzzle = "";
		this.word.forEach((letter) => {
			if (
				this.guessedLetters.includes(letter.toLowerCase()) ||
				letter === " "
			) {
				puzzle += letter;
			} else {
				puzzle += "*";
			}
		});
		return puzzle;
	}
	addSpaces() {
		this.word.forEach((letter) => {
			if (letter === " ") {
				this.guessedLetters.push(letter);
			}
		});
		this.spaces = true;
		return 1;
	}

	guess(letter) {
		// if (!this.spaces) {
		// 	this.addSpaces();
		// }
		if (this.status !== "playing") {
			return;
		}
		letter = letter.toLowerCase();
		if (
			(!this.guessedLetters.includes(letter) && this.word.includes(letter)) ||
			letter === " "
		) {
			this.guessedLetters.push(letter);
		} else if (!this.guessedLetters.includes(letter)) {
			this.guessedLetters.push(letter);
			this.guesses--;
		}
		this.playing();
	}

	playing() {
		const win = this.word.every(
			(letter) => this.guessedLetters.includes(letter) || letter === " "
		);
		const lose = this.guesses === 0;
		if (lose) {
			this.status = "failed";
		} else if (!win) {
			this.status = "playing";
		} else if (win) {
			this.status = "finished";
		}
	}

	renderGame = (puzzle, message, play, guess) => {
		if (guess) {
			this.guess(guess);
		}
		const prevPuzzle = this.puzzle;

		let renderedPuzzle = "";
		for (let i = 0; i < prevPuzzle.length; i++) {
			renderedPuzzle += `<span>${this.puzzle.slice(i, i + 1)}</span>`;
		}
		puzzle.innerHTML = renderedPuzzle;
		const incorrectLetters = this.guessedLetters.filter(
			(letter) => !this.word.includes(letter)
		);
		message.textContent = incorrectLetters.join(", ");
		play.textContent = this.message;
	};
}

startGame = async (word, guessed, play, difficulty = 2) => {
	const puzzle = await getWord(difficulty);
	const game1 = new Hangman(puzzle, 5);
	game1.renderGame(word, guessed, play);
	window.addEventListener("keypress", (e) => {
		const guess = String.fromCharCode(e.charCode);
		game1.renderGame(word, guessed, play, guess);
	});
};
