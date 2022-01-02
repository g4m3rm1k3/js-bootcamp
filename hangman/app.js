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
// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText);
		console.log(data);
	} else if (e.target.readyState === 4) {
		console.log("An error has taken place");
	}
});
request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
request.send();

const countryRequest = new XMLHttpRequest();

countryRequest.open("GET", "https://restcountries.com/v3.1/all");
countryRequest.send();

countryRequest.addEventListener("readystatechange", (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText);
		const country = data.find((country) => country.cca2 === "MX");
		console.log(country.name.official);
	} else if (e.target.readyState === 4) {
		console.log("Unable to fetch data");
	}
});
