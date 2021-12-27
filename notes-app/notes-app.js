const notes = [
	{
		title: "My next trip",
		body: "I would like to go to Spain",
	},
	{
		title: "Habbits to work on",
		body: "Exercise, Eating a bit better",
	},
	{
		title: "Office modification",
		body: "Get a new seat",
	},
];

// console.log("This is from a different file");

// Query and remove
// const p = document.querySelector("p");
// p.remove();

// Query all and remove
const ps = document.querySelectorAll("p");

ps.forEach(function (p) {
	p.textContent = `${"*".repeat(p.textContent.length)}`;
	// console.log(p.textContent);
	// p.remove();
});

// Add a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from Javascript";
document.body.appendChild(newParagraph);
