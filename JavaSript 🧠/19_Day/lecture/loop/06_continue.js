// Continue 
console.log("\nContinue example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("  Skipping iteration at i =", i);
    continue;
  }
  console.log("  Iteration", i);
}

console.log("\n=== End of LOOPS ===\n");
// comparison operator
let x = 20;
let y = 10;
console.log(x > y);