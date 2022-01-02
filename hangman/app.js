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

getWord((error, word) => {
	if (error) {
		console.log(`Error: ${error}`);
	} else {
		console.log(word);
	}
});

// const puzzle = getWordSync();
// console.log(puzzle);
// console.log("Do something else");

// const countryRequest = new XMLHttpRequest();

// countryRequest.open("GET", "https://restcountries.com/v3.1/all");
// countryRequest.send();

// countryRequest.addEventListener("readystatechange", (e) => {
// 	if (e.target.readyState === 4 && e.target.status === 200) {
// 		const data = JSON.parse(e.target.responseText);
// 		const country = data.find((country) => country.cca2 === "MX");
// 		console.log(country.name.official);
// 	} else if (e.target.readyState === 4) {
// 		console.log("Unable to fetch data");
// 	}
// });
