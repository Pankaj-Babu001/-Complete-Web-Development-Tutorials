// Problem 5: Sort an array of numbers in ascending order using .sort((a,b)=>a-b)

let numbers = [45, 12, 88, 3, 67, 23, 91, 5, 34];
console.log("Original array:", numbers);

// Use .sort() with compare function for ascending order
let sortedNumbers = numbers.sort((a, b) => a - b);

console.log("Sorted (ascending):", sortedNumbers);

// Note: .sort() modifies the original array
console.log("Original array is also sorted:", numbers);

// To keep original array unchanged, use spread operator
let numbers2 = [45, 12, 88, 3, 67, 23, 91, 5, 34];
let sortedNumbers2 = [...numbers2].sort((a, b) => a - b);
console.log("\nNew sorted array:", sortedNumbers2);
console.log("Original unchanged:", numbers2);

/* 
How it works:
- If (a - b) < 0, a comes before b
- If (a - b) > 0, b comes before a
- If (a - b) === 0, order remains unchanged
*/