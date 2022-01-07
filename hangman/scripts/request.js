const getWord = async (wordCount) => {
	const response = await fetch(
		`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
	);
	if (response.status === 200) {
		const data = await response.json();
		return data.puzzle;
	} else {
		throw new Error("Unable to fetch puzzle");
	}
};

const getWordOld = (wordCount) => {
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

const getCountryDetails = async (term) => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	if (response.status === 200) {
		const data = await response.json();
		country = await data.find((country) => country.cca2 === term);
		return country.name.official;
	} else {
		throw new Error("Unable to fetch Country");
	}
};

const getCountryDetailsOld = (term) => {
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

const getLocation = async () => {
	const response = await fetch("https://ipinfo.io/json?token=7e28ef886cbf58");
	if (response.status === 200) {
		return response.json();
	} else {
		throw new Error("Unable to fetch location");
	}
};

const getCurrentCountry = async () => {
	const response = await fetch("https://ipinfo.io/json?token=7e28ef886cbf58");
	if (response.status === 200) {
		const countryCode = await response.json();
		const response2 = await fetch("https://restcountries.com/v3.1/all");
		const data = await response2.json();
		return data.find((c) => c.cca2 === countryCode.country).name.official;
	}
};

getCurrentCountry()
	.then((country) => {
		console.log(country);
	})
	.catch((error) => {
		console.log(error);
	});
