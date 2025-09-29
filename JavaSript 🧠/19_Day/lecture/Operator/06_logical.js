// ============================================
// 🔗 LOGICAL OPERATORS
// ============================================

console.log("=== LOGICAL OPERATORS ===\n");

// AND (&&) - both must be true
console.log("--- Logical AND (&&) ---");
console.log("true && true =", true && true);
console.log("true && false =", true && false);
console.log("false && true =", false && true);

let age = 25;
let hasLicense = true;
console.log("\nCan drive?", age >= 18 && hasLicense);

// OR (||) - at least one must be true
console.log("\n--- Logical OR (||) ---");
console.log("true || false =", true || false);
console.log("false || false =", false || false);

let isWeekend = true;
let isHoliday = false;
console.log("Can sleep in?", isWeekend || isHoliday);

// NOT (!) - inverts boolean
console.log("\n--- Logical NOT (!) ---");
console.log("!true =", !true);
console.log("!false =", !false);

let isRaining = false;
console.log("Should go outside?", !isRaining);

// SHORT-CIRCUIT EVALUATION
console.log("\n--- Short-Circuit Behavior ---");
console.log("false && 'never evaluated' =", false && "never evaluated");
console.log("true || 'never evaluated' =", true || "never evaluated");

// LOGICAL vs BITWISE OPERATORS
console.log("\n--- Logical vs Bitwise ---");
console.log("Logical AND: true && false =", true && false);
console.log("Bitwise AND: 5 & 3 =", 5 & 3, "(binary: 101 & 011 = 001)");

console.log("\nLogical OR: true || false =", true || false);
console.log("Bitwise OR: 5 | 3 =", 5 | 3, "(binary: 101 | 011 = 111)");

console.log("\n💡 Logical: for booleans (&&, ||, !)");
console.log("💡 Bitwise: for binary operations (&, |, ^, ~, <<, >>)\n");
