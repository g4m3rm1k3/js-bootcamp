const todos = [
	"finish javascript course",
	"finish node course",
	"take express course",
	"take react course",
	"start django react course",
];

todos.splice(2, 1);
todos.push("advanced react course?");
todos.shift();

console.log(`You have ${todos.length} items left to todo`);
console.log(todos);
