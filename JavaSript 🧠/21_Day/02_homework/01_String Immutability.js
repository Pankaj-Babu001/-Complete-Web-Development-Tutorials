// ========================================
// 1️⃣ Prove String Immutability
// ========================================
console.log("=== String Immutability Demo ===\n");

let greeting = "Hello";
console.log("Original string:", greeting);

// Try to modify the string (this won't actually change it)
greeting[0] = "J"; // Attempting to change 'H' to 'J'
console.log("After trying greeting[0] = 'J':", greeting);
console.log("❌ String is still 'Hello' - strings are immutable!\n");

// The only way to "change" a string is to create a new one
greeting = "Jello";
console.log("After reassigning greeting = 'Jello':", greeting);
console.log("✅ We created a NEW string, not modified the old one\n");

// Another example
let text = "Immutable";
let original = text;
text = text.toUpperCase(); // Creates a new string
console.log("Original reference:", original); // Still "Immutable"
console.log("New string:", text); // "IMMUTABLE"
console.log("\n💡 Conclusion: Strings cannot be modified in place!");