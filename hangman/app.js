// product --> Object.prototype --> null
const product = {
	name: "Influence",
};

Object.prototype.someNewMethod = () => "This is the new function";

// hasOwnProperty
console.log(product.someNewMethod());
console.log(product);
