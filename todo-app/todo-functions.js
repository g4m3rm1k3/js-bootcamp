const todoPlace = document.querySelector("#todoPLace");

const getSavedTodos = function () {
	const todosJSON = localStorage.getItem("todos");

	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	} else {
		return [];
	}
};

const SaveTodos = function (todos) {
	localStorage.setItem("todos", JSON.stringify(todos));
};

const filteredTodos = function (todos, f) {
	todoPlace.innerHTML = "";

	const filtered = todos.filter(function (todo) {
		const searchTextMatch = todo.text.toLowerCase().includes(f.toLowerCase());
		const hideCompletedMatch = !filters.hide || !todo.completed;
		debugger;
		return searchTextMatch && hideCompletedMatch;
	});
	generateDOM(filtered);
};

const generateDOM = function (todos) {
	domSummary(todos);
	todos.forEach(function (todo) {
		const p = document.createElement("p");
		p.textContent = todo.text;
		todoPlace.appendChild(p);
	});
};

const domSummary = function (todos) {
	const p = document.createElement("h2");
	p.textContent = `You have ${todos.length} todos left`;
	todoPlace.appendChild(p);
};
