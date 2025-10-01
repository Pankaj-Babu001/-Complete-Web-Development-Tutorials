// ========================================
// 2️⃣ Experiment with .slice() and .replaceAll()
// ========================================
console.log("=== slice() and replaceAll() Methods ===\n");

let customText = "JavaScript is awesome and JavaScript is powerful!";
console.log("Original text:", customText);
console.log("Length:", customText.length);

// ========== .slice() Experiments ==========
console.log("\n--- slice() Experiments ---");

// Extract first 10 characters
let sliced1 = customText.slice(0, 10);
console.log("slice(0, 10):", sliced1);

// Extract "awesome"
let sliced2 = customText.slice(14, 21);
console.log("slice(14, 21):", sliced2);

// Extract last 9 characters (negative index)
let sliced3 = customText.slice(-9);
console.log("slice(-9):", sliced3);

// Extract from index 5 to end
let sliced4 = customText.slice(5);
console.log("slice(5):", sliced4);

// Extract middle portion
let sliced5 = customText.slice(11, 28);
console.log("slice(11, 28):", sliced5);

// ========== .replaceAll() Experiments ==========
console.log("\n--- replaceAll() Experiments ---");

// Replace all occurrences of "JavaScript"
let replaced1 = customText.replaceAll("JavaScript", "Python");
console.log("replaceAll('JavaScript', 'Python'):", replaced1);

// Replace all spaces with underscores
let replaced2 = customText.replaceAll(" ", "_");
console.log("replaceAll(' ', '_'):", replaced2);

// Replace all 'a' with '@'
let replaced3 = customText.replaceAll("a", "@");
console.log("replaceAll('a', '@'):", replaced3);

// Chain multiple replaceAll
let replaced4 = customText.replaceAll("JavaScript", "JS").replaceAll("is", "IS");
console.log("Multiple replaceAll chained:", replaced4);

// Case-sensitive replacement
let replaced5 = customText.replaceAll("awesome", "AMAZING");
console.log("replaceAll('awesome', 'AMAZING'):", replaced5);

console.log("\n✅ Original text remains unchanged:", customText);