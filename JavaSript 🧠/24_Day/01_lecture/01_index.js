// Function Declaration

// function greeting() {
//   console.log("Hello!");
//   return 10;
// }
//
// function addNumber(a, b, c=0, d=0) {
//     const sum = a + b + c + d;
//     console.log(sum);
// }

// greeting();

// Rest Operator
// function addNumber(...num) {
//     let sum = 0;
//     for (let n of num) {
//         sum+=n;
//     }
//     console.log(sum);
// }

// addNumber(2, 8);
// addNumber(4, 5, 6);
// addNumber(7, 8, 4, 2);
// addNumber(7, 8, 4, 2, 5, 7, 6, 8, 9, 78);

// console.log(greeting());

const  arr= [7, 8, 4, 2, 5, 7, 6, 8, 9, 78];
const  arr2= [5, 7, 8, 9];

// const [first, second, ...num] = arr;
// console.log(first, second, num);

// const ans = [arr,arr2];
const ans = [...arr,...arr2];
console.table(ans);
