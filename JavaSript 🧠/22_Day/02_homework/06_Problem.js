// Problem 6: Use .find() to locate the first number greater than 50

let numbers = [12, 35, 48, 67, 89, 23, 71, 45];
console.log("Array:", numbers);

// Use .find() to get first number greater than 50
let firstGreaterThan50 = numbers.find(num => num > 50);

console.log("First number > 50:", firstGreaterThan50);

// Example 2: Find first even number
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// Example 3: Find returns undefined if no match
let notFound = numbers.find(num => num > 100);
console.log("Number > 100:", notFound);

/* 
How it works:
- .find() returns the FIRST element that satisfies the condition
- Returns undefined if no element matches
- Stops searching after finding first match
*/