// ====================================================================
// 🔹 BONUS 1 — Closure-Based Banking System (Private Balance)
// ====================================================================

function createBankAccount() {
    let balance = 500; // private variable

    return {
        deposit: function (amount) {
            if (typeof amount === "number" && amount > 0) {
                balance += amount;
                return `Deposited ₹${amount}, New Balance: ₹${balance}`;
            } else {
                return "❌ Invalid deposit amount";
            }
        },
        withdraw: function (amount) {
            if (typeof amount === "number" && amount > 0 && balance >= amount) {
                balance -= amount;
                return `Withdrew ₹${amount}, Remaining Balance: ₹${balance}`;
            } else {
                return "❌ Invalid withdrawal or insufficient balance";
            }
        },
        getBalance: function () {
            return `💰 Current Balance: ₹${balance}`;
        },
    };
}

const customer = createBankAccount();
console.log(customer.getBalance());
console.log(customer.deposit(1000));
console.log(customer.withdraw(700));
console.log(customer.getBalance());


// ====================================================================
// 🔹 BONUS 2 — Higher-Order Function Example (Multiplier)
// ====================================================================

function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const timesFive = multiplier(5);
console.log("5 × 7 =", timesFive(7)); // Output: 35


// ====================================================================
// 🔹 BONUS 3 — Visual Explanation of Scope & Closure in Action
// ====================================================================

function visualizeScope() {
    const outerVar = "Outer";

    function middle() {
        const middleVar = "Middle";

        function inner() {
            const innerVar = "Inner";
            console.log("Inner Variable:", innerVar);
            console.log("Middle Variable:", middleVar);
            console.log("Outer Variable:", outerVar);
        }

        inner();
    }

    middle();
}

visualizeScope();

/*
📜 Final Visualization (Scope Chain Diagram)

Global Scope
│
└── visualizeScope()
     │
     └── middle()
           │
           └── inner()
                 ├── innerVar -> "Inner"
                 ├── middleVar -> "Middle" (found in parent)
                 └── outerVar -> "Outer" (found in grandparent)
*/


// ====================================================================
// 🔹 BONUS 4 — Another HOF Example: Function that Accepts a Function
// ====================================================================

function operateOnArray(arr, operationFn) {
    let result = [];
    for (let val of arr) {
        result.push(operationFn(val));
    }
    return result;
}

const nums = [1, 2, 3, 4];
const squared = operateOnArray(nums, (n) => n * n);
console.log("Squared:", squared); // [1, 4, 9, 16]
const tripled = operateOnArray(nums, (n) => n * 3);
console.log("Tripled:", tripled); // [3, 6, 9, 12]


// ====================================================================
// 🔚 END OF FILE
// --------------------------------------------------------------------
// Summary:
// ✅ Scope Chain Concepts
// ✅ Closure Mechanics
// ✅ Private Data with Closures
// ✅ HOF Examples (filter, multiplier, array operator)
// ✅ Clean console output for testing
// --------------------------------------------------------------------