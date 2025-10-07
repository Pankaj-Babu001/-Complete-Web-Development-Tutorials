// function: expression

// console.log(addNumber(323, 132));
// function addNumber (num1, num2) {
//     return num1 + num2;
// }

// const addNumber = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNumber(323, 132));

// Arrow function

// () => { }

// const addNumber = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addNumber(54, 46));


// let arr = [10, 54, 12, 19, 11];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// we have single parameter no need this {}
// const addNumber = (num1, num2) => num1 + num2;
// console.log(addNumber(54, 46));

// const squareNumber = num => num*num;
// console.log(squareNumber(2));

// const greetig = () => {
//     let user = {
//         name: "Pankaj",
//         age: 20
//     }
//     return user;
// }

// const greetig = () =>( {name: "Pankaj", age: 20 })
// console.log(greetig());

// IIFE

(function greeting () {
    console.log("Hello");
})();

(() => {
    console.log("Hello");
}) ();
