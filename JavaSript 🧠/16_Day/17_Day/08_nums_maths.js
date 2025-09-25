// const score = 400
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 123.856789;
// console.log(otherNumber.toPrecision(4)); // 123.5

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,00,000

// console.log(hundreds.toLocaleString('en-US')); // 1,0000,000

//++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math); // [Math: Math]
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.abs(4));
// console.log(Math.round(4.6)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 5, 6, 7, 8)); // 4
// console.log(Math.max(4, 5, 6, 7, 8)); // 8
// console.log(Math.random()); // Random number between 0 and 1


console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random() * 10) +1); // Random number between 0 and 10
console.log(Math.floor(Math.random() * 10) +1); // Random integer between 0 and 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20