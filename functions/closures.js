const createCounter = () => {
	let count = 0;

	return {
		increment() {
			count++;
		},
		decrement() {
			count--;
		},
		get() {
			return count;
		},
	};
};

// const counter = createCounter();
// console.log(counter.get());
// counter.increment();
// counter.increment();
// console.log(counter.get());
// counter.decrement();
// counter.count = 0;
// console.log(counter.count);
// console.log(counter.get());

// Adder
const createAdder = (a) => {
	return (b) => {
		return a + b;
	};
};

const add10 = createAdder(10);
// console.log(add10(50));
// console.log(add10(-2));
// console.log(add10(0.5));

const createTipper = (basetip) => {
	return (amount) => {
		return basetip * amount;
	};
};
const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);
const tip25 = createTipper(0.25);
console.log(tip15(100));
console.log(tip20(100));
console.log(tip25(100));
