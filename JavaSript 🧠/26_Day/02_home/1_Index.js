// 🧠 JavaScript Full Homework: Scope, Closure & Higher-Order Functions
// --------------------------------------------------------------------
// Topics: Scope Chain | Closure | Encapsulation | HOF
// --------------------------------------------------------------------


// ====================================================================
// 🔹 THEORY REFERENCE SECTION — Understanding Scope
// ====================================================================

// Global -> Accessible everywhere
// Functional -> Accessible only inside that function
// Block -> Accessible only within { } block

let a = 10;
const b = 20;

if (true) {
    let d = 30;
    console.log("Inside block:", d); // ✅ Works
}

// console.log(d); ❌ Error: Block-scoped variable


function greet() {
    let c = 30;
    var e = 90;
    console.log("Inside function:", c, e);
}

greet();
// console.log(c); ❌ Not accessible (function-scoped)


// ====================================================================
// 🔹 Nested Function Example — Demonstrating Scope Chain
// ====================================================================

let global = 30;

function outer() {
    let global = 40;

    function inner() {
        let global = 10;
        console.log("Inner variable:", global); // local scope first
    }

    inner();
}

outer();

/*
🧩 Scope Chain Visualization
Global Scope
│
├── outer() Scope
│     └── variable: global = 40
│
└── inner() Scope
      └── variable: global = 10
*/

