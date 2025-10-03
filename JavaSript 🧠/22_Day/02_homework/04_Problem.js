// Problem 4: Use .reduce() to calculate the sum of an array

let numbers = [5, 10, 15, 20, 25, 30];
console.log("Array:", numbers);

// Use .reduce() to calculate sum
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);

// Shorter syntax
let sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum (shorter):", sum2);

/* 
How it works:
- accumulator starts at 0 (the initial value)
- Each iteration adds currentValue to accumulator
- Returns final accumulated value
*/