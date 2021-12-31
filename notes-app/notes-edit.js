const title = document.querySelector("#note-title");
const body = document.querySelector("#note-body");
const removeNoteButton = document.querySelector("#remove-note");

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
	return note.id === noteId;
});

if (note === undefined) {
	location.assign("/index.html");
}
title.value = note.title;
body.value = note.body;

title.addEventListener("input", function (e) {
	note.title = e.target.value;
	saveNotes(notes);
});
body.addEventListener("input", function (e) {
	note.body = e.target.value;
	saveNotes(notes);
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
	}
});
