// Problem 10: Chain multiple array methods together

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", numbers);

// Example 1: Filter even numbers, square them, then sum
let result1 = numbers
  .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(num => num ** 2)           // [4, 16, 36, 64, 100]
  .reduce((sum, num) => sum + num, 0); // 220

console.log("\nEven numbers squared and summed:", result1);

// Example 2: Filter odd numbers, double them, sort descending
let result2 = numbers
  .filter(num => num % 2 !== 0)  // [1, 3, 5, 7, 9]
  .map(num => num * 2)            // [2, 6, 10, 14, 18]
  .sort((a, b) => b - a);         // [18, 14, 10, 6, 2]

console.log("Odd numbers doubled and sorted descending:", result2);

// Example 3: Complex chain
let students = [85, 92, 78, 95, 88, 76, 90];
let avgOfPassingScores = students
  .filter(score => score >= 80)   // Filter passing scores
  .reduce((sum, score, _, arr) => sum + score / arr.length, 0); // Calculate average

console.log("\nAverage of passing scores (≥80):", avgOfPassingScores.toFixed(2));

/* 
Method chaining benefits:
- Cleaner, more readable code
- Each method returns new array (except reduce)
- Process data in logical steps
*/