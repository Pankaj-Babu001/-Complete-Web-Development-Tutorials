'use strict';

// Function to greet a user
function greet() {
    console.table(`Hii ${this.name} is ${this.age} year old!`);
}

// Function to increment age and update name
function incrementAge(value, name) {
    this.age += value;
    this.name = name;

    console.log(`Updated Name: ${this.name}`);
    console.log(`Updated Age: ${this.age}`);
}

// User objects
const user = { name: "Pankaj", age: 19 };
const user1 = { name: "Saroj", age: 20 };
const user2 = { name: "Suraj", age: 21 };
const user3 = { name: "Raju", age: 25 };
const user4 = { name: "Rohit", age: 30 };

// Correct apply usage
incrementAge.apply(user, [5, "Radhey"]);
incrementAge.apply(user1, [5, "Raushan"]);
incrementAge.apply(user2, [5, "Mohan"]);
incrementAge.call(user3, 5, "Rohan");
incrementAge.call(user4, 5, "Mohit");









//
// "use strict";
//
// // Function to increment age and update name
// function updateUser(value, newName) {
//
//     // Store previous values
//     const prevData = {
//         Previous_Name: this.name,
//         Previous_Age: this.age
//     };
//
//     // Update values
//     this.age += value;
//     this.name = newName;
//
//     const updatedData = {
//         Updated_Name: this.name,
//         Updated_Age: this.age
//     };
//
//     // Print as tables
//     console.log("===== Previous Data =====");
//     console.table(prevData);
//
//     console.log("===== Updated Data =====");
//     console.table(updatedData);
// }
//
//
// // --------------------------
// // USERS
// // --------------------------
// const userA = { name: "Amit", age: 20 };
// const userB = { name: "Sumit", age: 22 };
//
//
// // --------------------------
// //  CALL()
// // --------------------------
// console.log("\n=========== Using call() ===========");
//
// updateUser.call(userA, 5, "Rohit");
// updateUser.call(userB, 3, "Mohit");
//
//
// // --------------------------
// //  APPLY()
// // --------------------------
// console.log("\n=========== Using apply() ===========");
//
// updateUser.apply(userA, [2, "Deepak"]);
// updateUser.apply(userB, [4, "Kunal"]);
