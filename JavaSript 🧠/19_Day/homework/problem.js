// ============================================
// 🧮 THE FAMOUS JS MATH PROBLEM
// ============================================

console.log("\n\n=== THE 0.1 + 0.2 PROBLEM ===\n");

console.log("--- The Problem ---");
const result = 0.1 + 0.2;
console.log("0.1 + 0.2 =", result);
console.log("Expected: 0.3");
console.log("0.1 + 0.2 === 0.3 →", 0.1 + 0.2 === 0.3);

console.log("\n--- Why This Happens ---");
console.log("JavaScript uses IEEE 754 floating-point format");
console.log("Binary can't precisely represent all decimals");
console.log("0.1 in binary: 0.0001100110011001100110011...(repeating)");
console.log("0.2 in binary: 0.001100110011001100110011...(repeating)");
console.log("Small rounding errors accumulate in the result");


// ============================================
// 💡 SOLUTIONS TO 0.1 + 0.2 PROBLEM
// ============================================

console.log("\n\n=== SOLUTIONS ===\n");

// Solution 1: toFixed()
console.log("--- Solution 1: toFixed() ---");
const fixed = (0.1 + 0.2).toFixed(1);
console.log("(0.1 + 0.2).toFixed(1) =", fixed, `(type: ${typeof fixed})`);
console.log("parseFloat(fixed) =", parseFloat(fixed));
console.log("✅ Good for display, returns string");

// Solution 2: Number.EPSILON
console.log("\n--- Solution 2: Number.EPSILON ---");
console.log("Number.EPSILON =", Number.EPSILON);
const isEqual = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
console.log("Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON →", isEqual);
console.log("✅ Best for comparisons, mathematically sound");

// Solution 3: Custom Epsilon
console.log("\n--- Solution 3: Custom Epsilon ---");
function areClose(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}
console.log("areClose(0.1 + 0.2, 0.3) →", areClose(0.1 + 0.2, 0.3));
console.log("✅ Flexible, set your own precision threshold");

// Solution 4: "Cents" Method (Integer Math)
console.log("\n--- Solution 4: Cents Method (Integer Math) ---");
const cents1 = 10; // $0.10 as 10 cents
const cents2 = 20; // $0.20 as 20 cents
const totalCents = cents1 + cents2;
const dollars = totalCents / 100;
console.log(`${cents1}¢ + ${cents2}¢ = ${totalCents}¢ = $${dollars}`);
console.log("✅ Perfect for money calculations");

// Solution 5: Multiply, Add, Divide
console.log("\n--- Solution 5: Multiply-Add-Divide ---");
const precise = (0.1 * 10 + 0.2 * 10) / 10;
console.log("(0.1 * 10 + 0.2 * 10) / 10 =", precise);
console.log("precise === 0.3 →", precise === 0.3);
console.log("✅ Quick fix for simple calculations");

// Solution 6: Math.round()
console.log("\n--- Solution 6: Math.round() ---");
const rounded = Math.round((0.1 + 0.2) * 100) / 100;
console.log("Math.round((0.1 + 0.2) * 100) / 100 =", rounded);
console.log("✅ Good for rounding to specific decimal places");

// Solution 7: Using a Library (example approach)
console.log("\n--- Solution 7: Using Libraries ---");
console.log("For serious math: use libraries like:");
console.log("  • decimal.js");
console.log("  • big.js");
console.log("  • bignumber.js");
console.log("✅ Best for financial/scientific applications");

// COMPARISON TABLE
console.log("\n--- Quick Comparison ---");
console.log("Method              | Use Case");
console.log("--------------------|----------------------------------");
console.log("toFixed()           | Display to users");
console.log("Number.EPSILON      | Precise comparisons");
console.log("Cents method        | Money calculations");
console.log("Multiply-Divide     | Simple quick fixes");
console.log("Math.round()        | Rounding to decimals");
console.log("Libraries           | Complex financial/scientific math");

console.log("\n✅ Guide Complete! Happy Coding! 🚀");