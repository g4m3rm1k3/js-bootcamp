const words = () => {
	return fetch(
		"https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
	)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => console.log("ERROR"));
};
const object1 = () => words.then((a) => a).then((b) => b);
const getWords = () => {
	const word = () => Object.keys(object1);
	return word();
};
const address = fetch(
	"https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
)
	.then((response) => response.json())
	.then((user) => {
		return user;
	});

const printAddress = () => {
	return address.then((a) => a);
};

const object2 = printAddress();
console.log(object2);
