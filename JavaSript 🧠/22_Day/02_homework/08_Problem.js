// Problem 8: Practice .slice() and .splice() methods

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
console.log("Original array:", numbers);

// .slice() - returns a COPY of portion of array (doesn't modify original)
let sliced = numbers.slice(2, 5);
console.log("\nslice(2, 5):", sliced); // [30, 40, 50]
console.log("Original after slice:", numbers); // unchanged

// .slice() with negative index
let lastThree = numbers.slice(-3);
console.log("slice(-3):", lastThree); // [60, 70, 80]

// .splice() - MODIFIES original array (removes/adds elements)
let numbers2 = [10, 20, 30, 40, 50, 60, 70, 80];
console.log("\nNew array for splice:", numbers2);

// Remove 2 elements starting at index 3
let removed = numbers2.splice(3, 2);
console.log("splice(3, 2) removed:", removed); // [40, 50]
console.log("Array after splice:", numbers2); // [10, 20, 30, 60, 70, 80]

// Add elements using splice
numbers2.splice(2, 0, 25, 27); // At index 2, remove 0, add 25 and 27
console.log("After adding elements:", numbers2);

/* 
Key differences:
- .slice() = read-only copy, original unchanged
- .splice() = modifies original, can add/remove elements
*/