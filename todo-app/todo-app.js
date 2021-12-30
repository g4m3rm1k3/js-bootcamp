const todos = getSavedTodos();

// Summary message You have 2 todos left (p element)
// Add a p for each todo above (use text value)

const filters = {
	searchText: "",
};

filteredTodos(todos, "");

document.querySelector("#search-text").addEventListener("input", function (e) {
	filteredTodos(todos, e.target.value);
});

document.querySelector("#add-todo").addEventListener("submit", function (e) {
	e.preventDefault();
	todos.push({ text: e.target.elements.todo.value, completed: false });
	SaveTodos(todos);

	e.target.elements.todo.value = "";
	filteredTodos(todos, "");
});

document.querySelector("#toggle").addEventListener("change", function (e) {
	filters.hide = e.target.checked;
	filteredTodos(todos, "");
});
