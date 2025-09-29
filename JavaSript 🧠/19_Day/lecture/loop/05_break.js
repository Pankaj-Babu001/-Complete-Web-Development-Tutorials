
// BREAK 
console.log("\n--- Break and Continue ---");

// Break example
console.log("Break example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("  Breaking the loop at i =", i);
    break;
  }
  console.log("  Iteration", i);
}
