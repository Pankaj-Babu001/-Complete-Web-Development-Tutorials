// # Primative DataTypes

// 7 Types : String , Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const inLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // true

const bigNumber = 12334584956233135n
// console.log(bigNumber); // 12334584956233135n




// Reference (Non-Primatvie Data Types) : 

// Array, Objects, Function

const heros =["Shakiman", "Naagraj", "Krrish"]
// console.log(heros) // [ 'Shakiman', 'Naagraj', 'Krrish' ]

let myObj = {
    name : "PAnkaj",
    age: 20,
}

//console.log(myObj);  // { name: 'PAnkaj', age: 20 }

// Function

const MyFunction = function(){
    // console.log("Hello World!");
    
}

// console.log(typeof MyFunction);


/************************************************************************************************************/

// # Stack (Primative Data Types), Heap (Non-Primative Data Types)

let myName = "Pankaj"
let anotherName = myName

anotherName = "Pankaj Kumar"
console.log(myName); // Pankaj
console.log(anotherName); 


let user1 = {
    Email: "pankaj@gmail",
    upi: "pankaj@ybl"
}

let user2 = user1
user2.Email = "pankaj@ybl"
console.log(user1.Email); // pankaj@ybl
console.log(user2.Email); // pankaj@ybl