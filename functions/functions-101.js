// Function - input (argument), code, output

let greetUser = function () {
	console.log("Welcome user!");
};

greetUser();
greetUser();
greetUser();

let convertFahrenheitToCelsius = function (x) {
	return ((x - 32) * 5) / 9;
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
