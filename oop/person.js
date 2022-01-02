// Prototypal Inheritance

class Person {
	constructor(firstName, lastName, age, likes = []) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.likes = likes;
	}
	getBio() {
		let bio = `${this.firstName} is ${this.age}`;
		this.likes.forEach((like) => {
			bio += ` ${this.firstName} likes ${like}.`;
		});
		return bio;
	}
	set fullName(fullName) {
		const names = fullName.split(" ");
		this.firstName = names[0];
		this.lastName = names[1];
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

class Employee extends Person {
	constructor(firstName, lastName, age, position, likes) {
		super(firstName, lastName, age, likes);
		this.position = position;
	}
	getBio() {
		return `${this.fullName} is a ${this.position}.`;
	}
	yearsLeft() {
		return 65 - this.age;
	}
}

class Student extends Person {
	constructor(firstName, lastName, age, classes, likes) {
		super(firstName, lastName, age, likes);
		this.classes = classes;
		this.grade = 0;
	}

	getBio() {
		return `${this.fullName} is enrolled in ${this.classes.length} classes`;
	}
	status() {
		return `${this.firstName} is ${
			this.grade > 70 ? "passing" : "failing"
		} with ${this.grade}`;
	}

	updateGrade(grade) {
		this.grade += grade;
	}
}

const student1 = new Employee("Michael", "McLean", 41, "coder", ["coding"]);
student1.fullName = "Allison Coombs";
console.log(student1.getBio());
