// Array  Definition

// let  mark1 = 10;
// let  mark2 = 20;
// let  mark3 = 30;
// let  mark4 = 40;
// let  mark5 = 50;
// let arr = [mark1, mark2, mark3, mark4, mark5];


// Array is a collection of similar data types
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// console.log(typeof arr); // object
// console.log(arr.length); // 5

// Array can store multiple data types

// let arr2 = ["Hello", 10, true, null, undefined, { name: "Pankaj", age: 19 }, [1, 2, 3]];
// console.log(arr2);
// console.log(arr2.length); // 7

// arr2[1] = 100; // update
// console.log(arr2);  // [ 'Hello', 100, true, null, undefined, { name: 'Pankaj', age: 19 }, [ 1, 2, 3 ] ]

// arr2.pop(); // remove last element
// console.log(arr2);  // [ 'Hello', 100, true, null, undefined, { name: 'Pankaj', age: 19 } ]

// arr2.push("New Element"); // add element at last
// console.table(arr2);  // [ 'Hello', 100, true, null, undefined, { name: 'Pankaj', age: 19 }, 'New Element' ]


// let arr = [100, 15, "Pankaj", "babu", 45, 78, 90, 23];
// console.log(arr);
// console.table(arr.length); // 8

// // add element at first position
// arr.unshift(200);
// arr.unshift(300); // add element at first position
// console.table(arr); // [ 300, 200, 100, 15, 'Pankaj', 'babu', 45, 78, 90, 23 ]

// // Delete element from first position
// arr.shift();
// console.table(arr); // [ 200, 100, 15, 'Pankaj', 'babu', 45, 78, 90, 23 ]

// // Delete element from last position
// arr.pop();
// console.table(arr); // [ 200, 100, 15, 'Pankaj', 'babu', 45, 78, 90 ]


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// for (let number of arr) {
//     console.log(number);
// }


// arr.forEach(function(number, index, array) {
//     console.log(number, index, array);
// });

// let arr2 = arr;

// arr2.push(110);
// console.log(arr);

// const arr = [10, 20, 30, 40, 50];
// arr = [100, 200, 300]; // Error: Assignment to constant variable.
// arr[0] = 100;


// const arr = [10, 20, 30, 40, 50];
// const arr2 = arr.slice(2, 4);
// // console.log(arr); // [ 10, 20, 30, 40, 50 ]

// console.log(arr.slice(1)); // [ 20, 30, 40, 50 ]
// console.log(arr.slice(1, 4)); // [ 20, 30, 40 ]
// console.log(arr.slice(0, 3)); // [ 10, 20, 30 ]
// console.log(arr.slice(-3)); // [ 30, 40, 50 ]
// console.log(arr.slice(-5, -2)); // [ 10, 20, 30 ]
// console.log(arr.slice(-5, 3)); // [ 10, 20, 30 ]
// console.log(arr.slice(-5, -1)); // [ 10, 20, 30, 40 ]
// console.log(arr); // [ 10, 20, 30, 40, 50 ]

// const arr3 = arr.splice(2, 2, 100, 200, 300);


// const arr = [10, 20, 30, 40, 50];
// const arr2 = ["Pankaj", 11, true];
// const arr4 = [90, 45, false];

// arr.concat(arr2);
// // console.log(arr);
// // console.log(arr2);
// // const arr3 = arr.concat(arr2, arr4);

// // const arr3 = [].concat(arr, arr2, arr4);

// // Spread Operator
// const arr3 = [...arr, ...arr2, ...arr4];

// console.table(arr3); // [ 10, 20, 30, 40, 50, 'Pankaj', 11, true, 90, 45, false ]


// const names = ["Pankaj", "babu", "Rahul", "Suresh", "Ramesh"];

// console.log(names.includes("Babu")); // true
// console.log(names.includes("babu")); // false

// console.log(names.toString()); // Pankaj,Babu,Rahul,Suresh,Ramesh

// console.log(names.join("  ")); // Pankaj  Babu  Rahul  Suresh  Ramesh
// console.log(names.join(" - ")); // Pankaj - Babu - Rahul - Suresh - Ramesh

// console.log(names.indexOf("Rahul")); // 2
// console.log(names.indexOf("rahul")); // -1
// console.log(names.lastIndexOf("Rahul")); // 2, same as indexOf("rahul"); // -1

// console.log(names.reverse()); // [ 'Ramesh', 'Suresh', 'Rahul', 'Babu', 'Pankaj' ]
// console.log(names); // [ 'Ramesh', 'Suresh', 'Rahul', 'Babu', 'Pankaj' ] 

// names.sort(); // changes the original array
// names.reverse(); // changes the original array
// console.log(names.sort()); // [ 'Babu', 'Pankaj', 'Rahul', 'Ramesh', 'Suresh' ]
// console.log(names); // [ 'Babu', 'Pankaj', 'Rahul', 'Ramesh', 'Suresh' ]



// const a = [101, 90, 80, 70, 60, 50, 40, 30, 20, 10];

// const arr = [10, "20", "Pankaj", "babu", 45, 78, 90, 23];
// a.sort();
// arr.sort();
// console.log(a); // [ 10, 101, 20, 30, 40, 50, 60, 70, 80, 90 ] // according to string Unicode code points values ASCII values
// console.log(arr); // [ 10, 23, 45, 78, 90, '20', 'Pankaj', 'babu' ] // according to string Unicode code points values ASCII values


// const arr = [101, 90, 80, 70, 60, 50, 40, 30, 20, 10];

// arr.sort((x, y) => x - y); // ascending order
// // a.sort((x, y) => y - x); // descending order


// // a.sort(function (x, y) {
// //     return x - y; // ascending order
// //     // return y - x; // descending order
// // });
// console.log(arr); // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 101 ]  // according to string Unicode code points values ASCII values


// 10, 40
// a=10
// b=40

// -ve: a-b => 10-40 => -30 => a comes before b
// +ve: a-b => 40-10 => 30 => b comes before a
// 0: a-b => 10-10 => 0 => no change    
// console.log(arr); // [ 101, 90, 80, 70, 60, 50, 40, 30, 20, 10 ]  // according to string Unicode code points values ASCII values

// ++++++++++++++++++++++++++++++Flatting an Array+++++++++++++++++++++++++++++++

const arr = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10, [11, [12, 13]]];

// console.log(arr[1][2], [3, 4]);


// console.log(arr.flat(0)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, [ 12, 13 ] ]
// console.log(arr.flat(infinity)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
// console.log(arr); // [ 1, 2, [ 3, 4 ], 5, 6, [ 7, 8, 9 ], 10, [ 11, [ 12, 13 ] ] ]

// ******************** Why array is not a data type? ********************
// let arr = [10, 20, 30];
// console.log(typeof arr); // object
// console.log(Array.isArray(arr)); // true
// console.log(arr instanceof Array); // true

// let obj = { name: "Pankaj", age: 19 };


// Why array is not in array in javascript?

const a = [10, 325, "Pankaj", 16.11, true];
a.name = "Saroj";

console.log(a["0"]); // 10
console.log(a); // Saroj
