const getWord = (wordCount) => {
	return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error("Unable to fetch puzzle");
			}
		})
		.then((data) => {
			return data.puzzle;
		});
};

const getCountryDetails = (term) => {
	return fetch("https://restcountries.com/v3.1/all")
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error("Unable to fetch Country");
			}
		})
		.then((data) => data.find((country) => country.cca2 === term))
		.then((country) => country.name.official);
};
