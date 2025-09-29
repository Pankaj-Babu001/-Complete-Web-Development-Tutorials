
// ============================================
// 4️⃣ LOOP TO PRINT FIRST 10 EVEN NUMBERS
// ============================================

console.log("=== Problem 4: First 10 Even Numbers ===\n");

// Method 1: Using for loop with counter
console.log("Method 1: For loop with counter");
for (let i = 2, count = 1; count <= 10; i += 2, count++) {
  console.log(`Even #${count}: ${i}`);
}

// Method 2: Using while loop
console.log("\nMethod 2: While loop");
let num = 2;
let counter = 1;
while (counter <= 10) {
  console.log(`Even #${counter}: ${num}`);
  num += 2;
  counter++;
}

// Method 3: Using for loop checking even condition
console.log("\nMethod 3: For loop with modulo check");
let evenCount = 0;
for (let i = 0; evenCount < 10; i++) {
  if (i % 2 === 0 && i > 0) {
    evenCount++;
    console.log(`Even #${evenCount}: ${i}`);
  }
}

console.log("\n✅ All homework problems completed!");