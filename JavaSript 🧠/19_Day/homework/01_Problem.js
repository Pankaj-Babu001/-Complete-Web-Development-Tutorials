// ============================================
// 1️⃣ COMPARING == vs === IN TRICKY CASES
// ============================================

console.log("=== Problem 1: == vs === Comparison ===\n");

// Case 1: Number vs String
console.log("Case 1: Number vs String");
console.log("5 == '5':", 5 == '5');     // true (type coercion)
console.log("5 === '5':", 5 === '5');   // false (different types)

// Case 2: Boolean vs Number
console.log("\nCase 2: Boolean vs Number");
console.log("true == 1:", true == 1);   // true (boolean converted to 1)
console.log("true === 1:", true === 1); // false (different types)

// Case 3: null vs undefined
console.log("\nCase 3: null vs undefined");
console.log("null == undefined:", null == undefined);   // true (special rule)
console.log("null === undefined:", null === undefined); // false (different types)

// Case 4: Empty string vs Zero
console.log("\nCase 4: Empty string vs Zero");
console.log("'' == 0:", '' == 0);     // true (empty string converted to 0)
console.log("'' === 0:", '' === 0);   // false (different types)

// Case 5: Array comparison
console.log("\nCase 5: Array to Primitive");
console.log("[1] == 1:", [1] == 1);     // true (array converted to string '1', then to number)
// console.log("[1] === 1:", [1] === 1);   // false (different types)

console.log("\n💡 Best Practice: Use === to avoid unexpected type coercion!\n");