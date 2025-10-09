// Execution Context
// Memory Allocation
// a = 10
// b = 30
// addNumber = function Code
// sumResult1 = undefined
// sumResult2 = undefined
// Execution Phase

// console.log(a);

let a = 10;
let b = 30;
console.log(a);

let sumResult1 = addNumber(a, b);
console.log(sumResult1);

function addNumber(num1, num2) {
    return num1 + num2;
}

// let sumResult1 = addNumber(a, b);
// let sumResult2 = addNumber(10, 20);
// console.log(sumResult1, sumResult2);
