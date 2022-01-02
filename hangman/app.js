// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const word = document.querySelector("#puzzle");
const guessed = document.querySelector("#incorrect");
const play = document.querySelector("#play");

const game1 = new Hangman("I am the only one", 2);

window.addEventListener("keypress", (e) => {
	const guess = String.fromCharCode(e.charCode);
	game1.renderGame(word, guessed, play, guess);
});
game1.renderGame(word, guessed, play);
// const guessWord = getWords();
