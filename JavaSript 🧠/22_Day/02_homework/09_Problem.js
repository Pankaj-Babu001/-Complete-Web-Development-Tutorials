// Problem 9: Use .reverse() and .join() methods

let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// .reverse() - reverses array IN PLACE (modifies original)
let reversed = numbers.reverse();
console.log("After reverse():", reversed);
console.log("Original is also reversed:", numbers);

// To reverse without modifying original, use spread operator
let numbers2 = [10, 20, 30, 40, 50];
let reversedCopy = [...numbers2].reverse();
console.log("\nOriginal:", numbers2);
console.log("Reversed copy:", reversedCopy);

// .join() - converts array to string with separator
let fruits = ["apple", "banana", "orange", "mango"];
console.log("\nFruits array:", fruits);

let joined1 = fruits.join();
console.log("join():", joined1); // Default comma separator

let joined2 = fruits.join(" - ");
console.log("join(' - '):", joined2);

let joined3 = fruits.join("");
console.log("join(''):", joined3);

// Combining reverse and join
let reversedString = fruits.reverse().join(" | ");
console.log("Reversed and joined:", reversedString);