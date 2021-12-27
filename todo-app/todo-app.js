const todos = [
	{ text: "finish javascript course", completed: true },
	{ text: "finish node course", completed: false },
	{ text: "take express course", completed: false },
	{ text: "take react course", completed: true },
	{ text: "start django react course", completed: false },
];

// Summary message You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const todosLeft = todos.filter(function (todo) {
	return !todo.completed;
}).length;

const p = document.createElement("h2");
p.textContent = `You have ${todosLeft} todos left`;
document.body.appendChild(p);
todos.forEach(function (todo) {
	const p = document.createElement("p");
	p.textContent = todo.text;
	document.body.appendChild(p);
});
