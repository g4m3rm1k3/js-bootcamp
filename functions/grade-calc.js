const gradeCalc = (score, totalScore) => {
	if (typeof score !== "number" || typeof totalScore !== "number") {
		throw err("Enter a number loser");
	}
	const percent = (score / totalScore) * 100;
	let letterGrade = "";

	letterGrade =
		percent >= 90
			? "A"
			: percent >= 80
			? "B"
			: percent >= 70
			? "C"
			: percent >= 60
			? "D"
			: "F";
	return `You got a ${letterGrade} (${percent}%)`;
};

try {
	const result = gradeCalc(true, 100);
	console.log(result);
} catch {
	console.log("Please enter a number");
}
