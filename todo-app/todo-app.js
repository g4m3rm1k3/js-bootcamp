let todos = [];

const todosJSON = localStorage.getItem("todos");

if (todosJSON !== null) {
	todos = JSON.parse(todosJSON);
}

// Summary message You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const filters = {
	searchText: "",
};

const filteredTodos = function (todos, f) {
	const todoPlace = document.querySelector("#todoPLace");
	todoPlace.innerHTML = "";

	const filtered = todos.filter(function (todo) {
		const searchTextMatch = todo.text.toLowerCase().includes(f.toLowerCase());
		const hideCompletedMatch = !filters.hide || !todo.completed;
		return searchTextMatch && hideCompletedMatch;
	});

	const todosLeft = filtered.filter(function (todo) {
		return !todo.completed;
	}).length;

	const p = document.createElement("h2");
	p.textContent = `You have ${todosLeft} todos left`;
	todoPlace.appendChild(p);

	filtered.forEach(function (todo) {
		const p = document.createElement("p");
		p.textContent = todo.text;
		todoPlace.appendChild(p);
	});
};

filteredTodos(todos, "");

document.querySelector("#search-text").addEventListener("input", function (e) {
	filteredTodos(todos, e.target.value);
});

document.querySelector("#add-todo").addEventListener("submit", function (e) {
	e.preventDefault();
	todos.push({ text: e.target.elements.todo.value, completed: false });
	localStorage.setItem("todos", JSON.stringify(todos));
	e.target.elements.todo.value = "";
	filteredTodos(todos, "");
});

document.querySelector("#toggle").addEventListener("change", function (e) {
	//

	filters.hide = e.target.checked;
	filteredTodos(todos, "");
});
