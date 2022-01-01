"use strict";

const title = document.querySelector("#note-title");
const body = document.querySelector("#note-body");
const removeNoteButton = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

const renderLastEdited = () => {
	dateElement.textContent = `last edited ${moment(note.updatedAt).fromNow()}`;
};

if (!note) {
	location.assign("/index.html");
}
title.value = note.title;
body.value = note.body;

title.addEventListener("input", (e) => {
	note.title = e.target.value;
	note.updatedAt = moment().valueOf();
	saveNotes(notes);
	renderLastEdited;
});
body.addEventListener("input", (e) => {
	note.body = e.target.value;
	saveNotes(notes);
	renderLastEdited;
});

removeNoteButton.addEventListener("click", (e) => {
	removeNote(note.id);
	saveNotes(notes);
	location.assign("/index.html");
});

window.addEventListener("storage", (e) => {
	if (e.key === "notes") {
		notes = JSON.parse(e.newValue);
		note = notes.find(function (note) {
			return note.id === noteId;
		});

		if (!note) {
			location.assign("/index.html");
		}
		title.value = note.title;
		body.value = note.body;
		renderLastEdited;
	}
});

renderLastEdited();
