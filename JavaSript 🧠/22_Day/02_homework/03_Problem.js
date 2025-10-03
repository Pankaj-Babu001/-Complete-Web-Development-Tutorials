// Problem 3: Use .filter() to extract even numbers from an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30];
console.log("Original array:", numbers);

// Use .filter() to get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evenNumbers);

// Explanation: num % 2 === 0 checks if number is divisible by 2 (even)