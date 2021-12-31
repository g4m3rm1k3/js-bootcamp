const todoPlace = document.querySelector("#todoPLace");

const getSavedTodos = () => {
	const todosJSON = localStorage.getItem("todos");

	if (todosJSON !== null) {
		return JSON.parse(todosJSON);
	} else {
		return [];
	}
};

const toggleCompleted = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (todoIndex > -1) {
		todos[todoIndex].completed = !todos[todoIndex].completed;
	}
};

const removeTodo = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}
};

const saveTodos = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

const filteredTodos = (todos, f) => {
	todoPlace.innerHTML = "";

	const filtered = todos.filter((todo) => {
		const searchTextMatch = todo.text.toLowerCase().includes(f.toLowerCase());
		const hideCompletedMatch = !filters.hide || !todo.completed;
		return searchTextMatch && hideCompletedMatch;
	});
	domSummary(filtered);
	filtered.forEach((todo) => {
		generateDOM(todo);
	});
};

const generateDOM = (todo) => {
	const div = document.createElement("div");
	const p = document.createElement("span");
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.checked = todo.completed;
	checkbox.addEventListener("change", (e) => {
		toggleCompleted(todo.id);
		saveTodos(todos);
		filteredTodos(todos, "");
	});
	todoPlace.append(div);
	p.textContent = todo.text;
	div.appendChild(p);

	const button = document.createElement("button");
	button.innerText = "x";
	div.appendChild(button);
	p.prepend(checkbox);
	button.addEventListener("click", () => {
		removeTodo(todo.id);
		saveTodos(todos);
		filteredTodos(todos, "");
	});
};

const domSummary = (todos) => {
	const Incomplete = todos.filter((todo) => !todo.completed);
	const p = document.createElement("h2");
	p.textContent = `You have ${Incomplete.length} todos left`;
	todoPlace.appendChild(p);
};
