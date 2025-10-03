// Problem 7: Use .some() and .every() to check array conditions

let numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);

// .some() - checks if AT LEAST ONE element satisfies condition
let hasNumberAbove25 = numbers.some(num => num > 25);
console.log("Has number > 25?", hasNumberAbove25); // true

let hasNumberAbove100 = numbers.some(num => num > 100);
console.log("Has number > 100?", hasNumberAbove100); // false

// .every() - checks if ALL elements satisfy condition
let allPositive = numbers.every(num => num > 0);
console.log("All positive?", allPositive); // true

let allAbove25 = numbers.every(num => num > 25);
console.log("All above 25?", allAbove25); // false

let allEven = numbers.every(num => num % 2 === 0);
console.log("All even?", allEven); // true

/* 
Key difference:
- .some() returns true if ANY element matches (OR logic)
- .every() returns true only if ALL elements match (AND logic)
*/