// ====================================================================
// 🔹 4️⃣ Draw the Scope Chain for Nested Functions (Code + Concept)
// ====================================================================

function scopeExample() {
    const outerVar = "Outer Variable";

    function innerScope() {
        const innerVar = "Inner Variable";
        console.log(innerVar); // Found locally
        console.log(outerVar); // Found via closure in parent
    }

    innerScope();
}

scopeExample();

/*
📘 Scope Chain Levels:
1️⃣ Global Scope
2️⃣ scopeExample() Function Scope
3️⃣ innerScope() Function Scope
If a variable isn't found in the current scope,
JS moves up the chain until it hits the global scope.
*/