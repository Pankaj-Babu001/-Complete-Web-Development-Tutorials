// Problem 1: Create an array of numbers & practice .push(), .pop(), .shift(), .unshift()

let numbers = [10, 20, 30, 40, 50];
console.log("Initial array:", numbers);

// .push() - adds element to the end
numbers.push(60);
console.log("After push(60):", numbers);

// .pop() - removes last element
let popped = numbers.pop();
console.log("After pop():", numbers);
console.log("Popped element:", popped);

// .shift() - removes first element
let shifted = numbers.shift();
console.log("After shift():", numbers);
console.log("Shifted element:", shifted);

// .unshift() - adds element to the beginning
numbers.unshift(5);
console.log("After unshift(5):", numbers);

console.log("\nFinal array:", numbers);