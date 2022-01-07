// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const word = document.querySelector("#puzzle");
const guessed = document.querySelector("#incorrect");
const play = document.querySelector("#play");
const reset = document.querySelector("#reset");
const difficulty = document.querySelector("#difficulty");

difficulty.addEventListener("change", (e) => {
	startGame(word, guessed, play, e.target.value);
});
reset.addEventListener("click", () => {
	startGame(word, guessed, play);
});

startGame(word, guessed, play);

// getWord(2)
// 	.then((puzzle) => {
// 		console.log(puzzle);
// 	})
// 	.catch((err) => {
// 		console.log(`Error: ${err}`);
// 	});

// getCountryDetails("MX")
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(`Error: ${error}`);
// 	});

// const getLocation = () => {
// 	return fetch("https://ipinfo.io/json?token=7e28ef886cbf58").then((response) =>
// 		response.json()
// 	);
// };

// getLocation().then(({ city, region, country }) => {
// 	console.log(`You are in ${city}, ${region}, ${country}`);
// });

// getLocation().then(({ country }) => {
// 	getCountryDetails(country).then((data) => {
// 		console.log(data);
// 	});
// });
// fetch("https://ipinfo.io/json?token=7e28ef886cbf58")
// 	.then((response) => {
// 		if (response.status === 200) {
// 			return response.json();
// 		} else {
// 			throw new Error("Unable to parse Data");
// 		}
// 	})
// 	.then(({ country }) => {
// 		fetch("https://restcountries.com/v3.1/all")
// 			.then((response) => response.json())
// 			.then((data) => data.find((c) => c.cca2 === country).name.official)
// 			.then((c) => {
// 				console.log(c);
// 			});
// 	});
