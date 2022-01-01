const word = document.querySelector("#puzzle");
const guessed = document.querySelector("#incorrect");
const play = document.querySelector("#play");

const game1 = new Hangman("Cat", 2);

window.addEventListener("keypress", (e) => {
	const guess = String.fromCharCode(e.charCode);
	game1.guess(guess);
	renderGame(game1, word, guessed, play);
});
renderGame(game1, word, guessed, play);
