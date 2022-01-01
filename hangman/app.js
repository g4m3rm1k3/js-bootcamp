const word = document.querySelector("#puzzle");
const guessesLeft = document.querySelector("#guesses");
const guessed = document.createElement("h3");
const play = document.querySelector("#play");

document.body.append(guessed);

const renderGame = function (game, element, guesses, guessed) {
	guesses.textContent = `Guesses Left ${game.guesses}`;
	element.textContent = game1.getPuzzle();
	const incorrectLetters = game.guessedLetters.filter(
		(letter) => !game.word.includes(letter)
	);
	guessed.textContent = incorrectLetters.join(", ");
	console.log(game.playing());
	play.textContent = game.status;
};
const game1 = new Hangman("cat", 2);

window.addEventListener("keypress", (e) => {
	const guess = String.fromCharCode(e.charCode);
	game1.guess(guess);
	renderGame(game1, word, guessesLeft, guessed);
});
renderGame(game1, word, guessesLeft, guessed);
