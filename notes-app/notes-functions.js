// Read saved data from localStorage
const getSavedNotes = function () {
	const notesJSON = localStorage.getItem("notes");

	if (notesJSON !== null) {
		return JSON.parse(notesJSON);
	} else {
		return [];
	}
};

// Generate the DOM structure for the note
const generateNoteDOM = function (note) {
	const newNote = document.createElement("p");
	if (note.title.length > 0) {
		newNote.textContent = note.body;
	} else {
		newNote.textContent = "Unnamed note";
	}
	return newNote;
};

// Render application notes
const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	document.querySelector("#notes").innerHTML = "";

	filteredNotes.forEach(function (note) {
		const noteEl = generateNoteDOM(note);
		document.querySelector("#notes").appendChild(noteEl);
	});
};
