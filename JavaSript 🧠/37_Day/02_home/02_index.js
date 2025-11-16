"use strict";

// Reusable function to update age + name
function updateUser(value, newName) {

    // Previous snapshot
    const prevData = {
        Previous_Name: this.name,
        Previous_Age: this.age
    };

    // Update the object
    this.age += value;
    this.name = newName;

    // Updated snapshot
    const updatedData = {
        Updated_Name: this.name,
        Updated_Age: this.age
    };

    // Print everything
    console.log("===== Previous Data =====");
    console.table(prevData);

    console.log("===== Updated Data =====");
    console.table(updatedData);
}


// --------------------------
// USERS
// --------------------------
const user1 = { name: "Amit", age: 20 };
const user2 = { name: "Sumit", age: 22 };


// =========================================================
//                         CALL()
// =========================================================
console.log("\n=========== Using call() ===========");
updateUser.call(user1, 5, "Rohit");   // args passed normally
updateUser.call(user2, 3, "Mohit");


// =========================================================
//                         APPLY()
// =========================================================
console.log("\n=========== Using apply() ===========");
updateUser.apply(user1, [2, "Deepak"]);  // args in array
updateUser.apply(user2, [4, "Kunal"]);


// =========================================================
//                         BIND()
// =========================================================
console.log("\n=========== Using bind() ===========");

// bind returns a NEW FUNCTION with "this" locked
const bindUser1 = updateUser.bind(user1);
const bindUser2 = updateUser.bind(user2);

// now call the new bound functions
bindUser1(10, "Suresh");
bindUser2(7, "Ramesh");
