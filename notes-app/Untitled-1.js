const now = new Date(); //"February 23 1980 6:25:01");
const timeStamp = now.getTime();

const myDate = new Date(timeStamp);
// console.log(myDate.getFullYear());

const firstDate = new Date();
console.log(firstDate.getFullYear());
const secondDate = new Date();
console.log(secondDate.getFullYear());
const firstTimeStamp = firstDate.getTime();
const secondTimeStamp = secondDate.getTime();
const newer = new Date(
	secondTimeStamp < firstTimeStamp ? secondTimeStamp : firstTimeStamp
);
console.log(newer.toString());

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of month: ${now.getDate()}`);
console.log(`Hour: ${now.getHours()}`);
console.log(`Minute: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);
