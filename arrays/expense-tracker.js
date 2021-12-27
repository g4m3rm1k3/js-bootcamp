const account = {
	name: "Michael McLean",
	expenses: [],
	incomes: [],
	addExpense(expense, amount) {
		this.expenses.push({ expense, amount: amount });
	},
	getAccountSummary() {
		let totalExpenses = 0;
		this.expenses.forEach(function (expense) {
			totalExpenses += expense.amount;
		});
		let totalIncomes = 0;
		this.incomes.forEach(function (income) {
			totalIncomes += income.amount;
		});
		return `${this.name} has $${totalIncomes - totalExpenses} $${totalIncomes}
    in income $${totalExpenses} in expenses`;
	},

	addIncome(job, amount) {
		this.incomes.push({ job, amount });
	},
};

//Expense -> description -> string, amount -> number
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Michael McLean has a balance of $10. $100 in income $90 in expenses.

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
account.addIncome("Work", 1000);
console.log(account.getAccountSummary());
