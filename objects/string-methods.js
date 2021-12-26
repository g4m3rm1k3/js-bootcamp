let name = "    Michael McLean    ";

// Length property

console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

// Includes method
let password = "abc123passwordf098";
console.log(password.includes("password"));

// Trim
console.log(name.trim());

// isValidPassword

//length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
	return password.length > 7 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abs123!@#$%^&"));
console.log(isValidPassword("asdfpasdfpoijpassword"));
