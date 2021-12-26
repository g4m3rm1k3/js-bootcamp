let myAccount = {
	name: "Michael McLean",
	expenses: 0,
	income: 0,
};

let addExpense = function (account, amount) {
	account.expenses = account.expenses + amount;
};
let addIncome = function (account, income) {
	account.income = account.income + income;
};

let resetAccount = function (account) {
	account.income = 0;
	account.expenses = 0;
  console.log(`${account.name} Account has been reset")
};

let accountSummary = function (account) {
	const { name, income, expenses } = account;
	console.log(
		`Account for ${name} has $${income} income and $${expenses} expenses`
	);
};

addExpense(myAccount, 2.5);
console.log(myAccount);
addIncome(myAccount, 100);
accountSummary(myAccount);
resetAccount(myAccount);
accountSummary(myAccount);
