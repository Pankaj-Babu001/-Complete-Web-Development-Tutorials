// ============================================
// 🤔 CONDITIONALS
// ============================================

console.log("=== CONDITIONALS ===\n");

// IF / ELSE IF / ELSE
console.log("--- if / else if / else ---");
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// TRUTHY & FALSY VALUES
console.log("\n--- Truthy & Falsy Values ---");

console.log("FALSY values (only 6 in JavaScript):");
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach(val => {
  console.log(`  ${String(val).padEnd(10)} → ${!!val}`);
});

console.log("\nTRUTHY values (everything else!):");
const truthyValues = [true, 1, -1, "hello", "0", " ", [], {}, Infinity];
truthyValues.forEach(val => {
  console.log(`  ${String(val).padEnd(10)} → ${!!val}`);
});

// Practical truthy/falsy usage
console.log("\n--- Practical Usage ---");
let username = "";
if (username) {
  console.log(`Welcome, ${username}!`);
} else {
  console.log("Please provide a username");
}

let items = [1, 2, 3];
if (items.length) {
  console.log(`You have ${items.length} items`);
} else {
  console.log("Cart is empty");
}