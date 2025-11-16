// This Call applies bind
// Strict mode vs Non-strick mode

// var a = 10;
// b = 20;
// console.log(a,b); // 10 20

// a = 10;
// b = 20;
// console.log(a,b); // 10 20

// a = 10;
// var b = 20;
// console.log(a,b);


// function greet(name, name){
//     console.log(name, name);
// }
// greet("Pankaj", "Raju");


// 'use strict'
// var a = 10;
// var b = 20;
// console.log(a,b);

// function greet(name, names){
//     console.log(name,names);
// }
// greet("Pankaj", "Saroj");


// console.log(window);
// console.log(global);

// document.getElementById("first")
// console.log(globalThis);

// Learn about this

// 'use strict'
// console.log(this);


// Function

// const user = {
//     name: "Pankaj",
//     age: 19,
//     greet: function() {
//         // console.log(this);
//         // console.log(`Hi ${this.name} is ${this.age} years old!`)
//         // console.log(user.name)
//         console.log(this.name);
//     }
// }
//
// const user2 = {
//     name: "Saroj"
// }
// user2.greet = user.greet;
// // this == user
// user2.greet();
// // user.greet();

// function greet(){
//     console.log(this);
// }
// greet();

// 'use strict'
// function greet(){
//     console.log(this);
// }
// greet();


// 'use strict'
//
// function greet() {
//     console.table(`Hii ${this.name} is ${this.age} year old!`)
// }
//
// function incrementAge(value , name){
//     this.age += value;
//     this.name = name;
//     console.log(this.age);
//     console.log(this.age);
// }
//
//
// const user = {
//     name: "Pankaj",
//     age: 19
// }
//
// const user1 = {
//     name: "Saroj",
//     age: 20
// }
//
// const user2 = {
//     name: "Suraj",
//     age: 21
// }
//
// const user3 = {
//     name: "Raju",
//     age: 25
// }
//
// const user4 = {
//     name: "Rohit",
//     age: 30
// }
//
// // greet.call(user);
// // greet.call(user1);
// // greet.call(user2);
// // greet.call(user3);
// // greet.call(user4);
//
// // incrementAge.call(user,5);
// // incrementAge.call(user1,5);
// // incrementAge.call(user2,5);
// // incrementAge.call(user3,5);
// // incrementAge.call(user4,5);
//
// // incrementAge.call(user1, 5, "Raushan");
// // incrementAge.apply(user1, 5, "Raushan");
// // incrementAge.apply(user2,[10,"Mohan"]);
// incrementAge.apply(user2,[10,"Mohan"]); // This line is correct



// 'use strict'
//
// function greet(){
//     console.log(`hi ${this.name}`);
// }
//
// function incrementAge(value,name){
//     this.age+=value;
//     this.name= name;
//     console.log(this.age);
//     console.log(this.name)
// }
//
// const user = {
//     name:"Rohit",
//     age:30,
// }
//
// const user2 = {
//     name:"Mohit",
//     age:10
// }
//
// // greet.call(user);
// // greet.call(user2);
//
// // incrementAge.call(user2,10,"Sohan");
// // incrementAge.apply(user2,[10,"Sohan"]);
// const incr = incrementAge.bind(user2,10,"Sohan");
//
// incr();


// class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.name = age;
//     }
// }
//
// // this = {name::"Pankaj", age: 19}
// const p1 = new Person("Pankaj" , 19);
// console.table(p1);


// Arrow Function: This doesn't exist for arrow function

// 'use strict'
// console.log(this);
//
// const greet = () => {
//     console.log(this);
// }
// greet();



// 'use strict'
// const user = {
//     name: "Pankaj",
//     greet: function (){
//         console.log(this);
//         const that = this;
//         function meet(){
//             console.log(this);
//         }
//         meet();
//     }
// }
// user.greet();


// const stopWatch = {
//     second:0,
//     start: function (){
//
//         const that = this;
//         setInterval(function(){
//             that.second++;
//             console.log(that.second);
//         },1000);
//     }
// }

// stopWatch.start();


// const stopWatch = {
//     second:0,
//     start: function (){
//
//         console.log(this);
//         setInterval(() =>{
//             this.second++;
//             console.log(this.second);
//         },1000);
//     }
// };
//
// stopWatch.start();

// 'use strict'
// console.log(this);
//
// const user = {
//     name: "Pankaj",
//     greet: ()=> {
//         console.log(this);
//     }
// }
//
// user.greet();

// const button = document.getElementById("first");
//
// button.addEventListener("click", () => {
//     console.log(this);
// })

// This keyword: Global scope in node.js = {}

// console.log(this);
'use strict'
function greet(){
    console.log(this)
}
greet()