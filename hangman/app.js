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

getWord(2)
	.then((puzzle) => {
		console.log(puzzle);
	})
	.catch((err) => {
		console.log(`Error: ${err}`);
	});

getCountryDetails("MX")
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(`Error: ${error}`);
	});

// fetch("http://puzzle.mead.io/puzzle", {})
// 	.then((response) => {
// 		if (response.status === 200) {
// 			return response.json();
// 		} else {
// 			throw new Error("Unable to fetch the puzzle");
// 		}
// 	})
// 	.then((data) => {
// 		console.log(data.puzzle);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
