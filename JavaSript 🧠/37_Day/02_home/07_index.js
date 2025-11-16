const bankAccount = {
    balance: 1000,
    transactions: [],

    withdraw(amount, description) {
        this.balance -= amount;
        this.transactions.push({
            type: 'withdrawal',
            amount,
            description,
            balance: this.balance
        });
        return this.balance;
    }
};

const savingsAccount = { balance: 5000, transactions: [] };
const businessAccount = { balance: 20000, transactions: [] };

// Use call/apply to reuse withdraw method
console.log("Savings:", bankAccount.withdraw.call(savingsAccount, 500, "Emergency"));
console.log("Business:", bankAccount.withdraw.apply(businessAccount, [2000, "Equipment"]));

// Create bound methods
const saveWithdraw = bankAccount.withdraw.bind(savingsAccount);
console.log("Savings bound:", saveWithdraw(300, "Monthly bill"));