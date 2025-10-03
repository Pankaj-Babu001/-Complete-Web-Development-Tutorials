// Problem 2: Use .map() to square all numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", numbers);

// Use .map() to square each number
let squaredNumbers = numbers.map(num => num * num);

console.log("Squared array:", squaredNumbers);

// Alternative syntax
let squaredNumbers2 = numbers.map(num => num ** 2);
console.log("Squared (using **):", squaredNumbers2);