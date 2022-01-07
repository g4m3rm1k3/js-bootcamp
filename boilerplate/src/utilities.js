// Named export
// Default export

const add = (x, y) => x + y;

const name = "Allison";

const square = (x) => x * x;
console.log("From my code");
export { add, name, square as default };
