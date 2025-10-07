// Object
// Key value

// const user = {
//     name: "Pankaj",
//     "age": 19,
//     emailIs: "pankaj@gmail.com",
//     amount: 500000,
//     "home address": "Buxar"
// }
//
// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);

// console.table(typeof user);
// CRUD operation : create read update delete

// console.table(user.age);

// update
// user.aadhar = 12345678901234;
// user.amount = 100000000
// console.log(user);

// Delete
//
// delete user.aadhar;
// console.log(user);

//
// const user = {
//     name: "Pankaj",
//     "age": 19,
//     emailIs: "pankaj@gmail.com",
//     amount: 500000,
//     "home address": "Buxar"
// }
//
// const user2 = user;
// user2.age = 25;

// Important
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.table(Object.entries(user));

//
// for (let keys in user) {
//     console.log(keys, user[keys]);
//     // console.log(keys, user.keys); // output = undefined
// }


//
// const user = {
//     name: "Pankaj",
//     age: 19,
//     emailIs: "pankaj@gmail.com",
//     amount: 500000,
// }

// const temnparr = object.keys(user);
// console.log(temnparr)
// for (let keys of temnparr){
//     console.log(keys);
// }

// for (let values of object.values(user)) {
//     console.log(values);
// }

// const name = user.name;
// const age = user.age;

// // object_ KO destructing Karna
// const {name:userName, age:userAge} = user;

// // Array KO destructing Karna
// const arr = [10, 20, 30, 40, 50];
// const [first, second] = arr;

// console.log(userName, userAge);
// console.log(first, second);


// console. log (Object. entries (user) ) ;


// [
//     [ 'name', 'Pankaj' ],
//     [ 'age', 19 ],
//     [ 'emailIs', 'pankaj@gmail.com' ],
//     [ 'amount', 500000 ]
// ]

// for (let values of Object.entries(user){
//     console.log(key, values);
// }


// const user = {
//     name: "Pankaj",
//     age: 19,
//     emailIs: "pankaj@gmail.com",
//     amount: 500000,
//     greeting: function () {
//         // console.log(`Strike is coming soon on 18 october 🚀 ${user.name}` ); // user
//         console.log(`Strike is coming soon on 18 october 🚀 ${this.name}` ); // this keyword
//         return 100;
//     }
// }

// const user2 = {
//     name: "Saroj",
//     account: 101
// }

// user2.greeting= user.greeting;

// user2.greeting();

// user.greeting();
// console.log(va);

// Nested Object

// const user = {
//     name: "Pankaj",
//     age: 19,
//     emailIs: "pankaj@gmail.com",
//     amount: 500000,
//     address: {
//         city: "Patna",
//         state: "Bihar",
//         proper: {
//             vill: "Bisunpura",
//             po: "Dindir",
//             ps: "Haspura",
//             dist:"Aurangabad",

//             pankaj: {
//                 vill: "Bisunpura",
//                 po: "Dindir",
//                 ps: "Haspura",
//                 dist:"Aurangabad"
//             }
//         }
//     }
// }

// shallow copy
// const user2= {...user};
// user2.name= "Santosh";

// console.log(user2)

// console.log(user.address.proper.pankaj.vill);
// console.log(user)

// Deep copy

// const user2 = structuredClone(user);
// console.log(user2);
// console.log(user);

// homeWork : structuredClone limitation find out


// Keys: String || Symbol

const sym = sym("id");
const user  = {
    name : "Pankaj",
    age: 19,
    0: 1000,
    1: "Saroj"
    [sym] = "Hello"
}


const arr = [10, 20, 30, 40, 50];
// {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40,
//     4: 50
// }
console.log(user[3]);
console.log(user[sym]);