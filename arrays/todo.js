const todos = [
	{ text: "finish javascript course", completed: true },
	{ text: "finish node course", completed: false },
	{ text: "take express course", completed: false },
	{ text: "take react course", completed: true },
	{ text: "start django react course", completed: false },
];

let sortTodos = function (todos) {
	todos.sort(function (a, b) {
		if (!a.completed && b.completed) {
			return -1;
		} else if (!b.completed && a.completed) {
			return 1;
		} else {
			return 0;
		}
	});
};

// let deleteTodo = function (todos, text) {
// 	const index = todos.findIndex(function (todo, index) {
// 		return todo.text.toLowerCase() === text.toLowerCase();
// 	});
// 	if (index !== -1) {
// 		todos.splice(index, 1);
// 	}
// };

// let getThingsToDo = function (todos) {
// 	return todos.filter(function (todo, index) {
// 		return !todo.completed;
// 	});
// };

// console.log(getThingsToDo(todos));

// deleteTodo(todos, "finish javascript course");
// console.log(todos);

sortTodos(todos);
console.log(todos);
