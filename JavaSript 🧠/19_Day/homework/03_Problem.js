
// ============================================
// 3️⃣ SOLVING 0.1 + 0.2 ISSUE
// ============================================

console.log("=== Problem 3: Solving 0.1 + 0.2 Issue ===\n");

// The Problem
console.log("The Problem:");
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("Expected: 0.3");
console.log("Actual:", 0.1 + 0.2);
console.log("Are they equal?", 0.1 + 0.2 === 0.3, "\n");

// Method 1: Using toFixed()
console.log("Method 1: Using toFixed()");
const result1 = (0.1 + 0.2).toFixed(1);
console.log("Result:", result1);
console.log("Type:", typeof result1, "(returns string)");
console.log("As number:", parseFloat(result1), "\n");

// Method 2: Multiply, add, then divide
console.log("Method 2: Integer Math (Multiply, Add, Divide)");
const result2 = (0.1 * 10 + 0.2 * 10) / 10;
console.log("Result:", result2);
console.log("Equals 0.3?", result2 === 0.3, "\n");

// Method 3: Using epsilon comparison
console.log("Method 3: Epsilon Comparison");
const epsilon = 0.0001;
const result3 = 0.1 + 0.2;
const isClose = Math.abs(result3 - 0.3) < epsilon;
console.log("Result:", result3);
console.log("Is close to 0.3?", isClose, "\n");

// Method 4: Using Math.round()
console.log("Method 4: Using Math.round()");
const result4 = Math.round((0.1 + 0.2) * 10) / 10;
console.log("Result:", result4);
console.log("Equals 0.3?", result4 === 0.3, "\n");
