// For...of loop (arrays)
console.log("\nFor...of loop (iterating arrays):");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.table({ Color: color });
}

// For...in loop (objects)
console.log("\nFor...in loop (iterating object keys):");
const person = { name: "Alice", age: 30, city: "NYC" };
for (const key in person) {
  console.table({ [key]: person[key] });
}

