const title = document.querySelector("#note-title");
const body = document.querySelector("#note-body");
const removeNoteButton = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
	return note.id === noteId;
});

const renderLastEdited = function () {
	dateElement.textContent = `last edited ${moment(note.updatedAt).fromNow()}`;
};

if (note === undefined) {
	location.assign("/index.html");
}
title.value = note.title;
body.value = note.body;

title.addEventListener("input", function (e) {
	note.title = e.target.value;
	note.updatedAt = moment().valueOf();
	saveNotes(notes);
	renderLastEdited;
});
body.addEventListener("input", function (e) {
	note.body = e.target.value;
	saveNotes(notes);
	renderLastEdited;
});

removeNoteButton.addEventListener("click", function (e) {
	removeNote(note.id);
	saveNotes(notes);
	location.assign("/index.html");
});

window.addEventListener("storage", function (e) {
	if (e.key === "notes") {
		notes = JSON.parse(e.newValue);
		note = notes.find(function (note) {
			return note.id === noteId;
		});

		if (note === undefined) {
			location.assign("/index.html");
		}
		title.value = note.title;
		body.value = note.body;
		renderLastEdited;
	}
});

renderLastEdited();
