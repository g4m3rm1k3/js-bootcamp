"use strict";

let notes = getSavedNotes();

const filters = {
	searchText: "",
	sortBy: "byCreated",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
	const id = uuidv4();
	const timeStamp = moment().valueOf();
	notes.push({
		id,
		title: "",
		body: "",
		createdAt: timeStamp,
		updatedAt: timeStamp,
	});
	saveNotes(notes);
	renderNotes(notes, filters);
	location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
	filters.sortBy = e.target.value;
	console.log(e.target.value);
	renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
	if (e.key === "notes") {
		notes = getSavedNotes();
		renderNotes(notes, filters);
	}
});
