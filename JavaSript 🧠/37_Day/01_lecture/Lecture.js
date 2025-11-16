// This call apply bind
// This: class object method
// Strict mode vs Non-strict mode
// 'use strict'
// global Object: In window it is called window, in Node.js, It is called global
// globalThis points to global object of the environment

// normal function: non-strict mode, this will point to global object
// in strict mode: It will point to undefined


// this keyword in global scope: NodeJS(Empty Object), in browser it will point to global Object
// arrow function take this keyword from it lexical environment scope
// call apply bind, this point to the invoking object


//  In class constructor, this will point to newly create empty object

// var a = 10;
// var b = 20;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Rohit","Mohit");

// document.getElementById("first");
// console.log(globalThis);


// Learn about this keyword
// 'use strict'

// console.log(this);


// Function
// 100 user: greet function: 100*memory , code copy and paste
// 'use strict'

// function greet(){
//     console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name= name;
//     console.log(this.age);
//     console.log(this.name)
// }

// const user = {
//     name:"Rohit",
//     age:30,
// }

// const user2 = {
//     name:"Mohit",
//     age:10
// }

// // greet.call(user);
// // greet.call(user2);

// // incrementAge.call(user2,10,"Mohan");
// // incrementAge.apply(user2,[10,"Mohan"]);
// const incr = incrementAge.bind(user2,10,"Mohan");

// incr();

// this == user

// user2.greet();

// 'use strict'


// function greet(){
//     console.log(this);
// }

// greet();


// class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// // this = {name:"Rohit", age:20}

// const p1 = new Person("Rohit",20);

// console.log(p1);




// Arrow Function: this doesn't exist for arrow function, lexical environment scope
// 'use strict'

// console.log(this);

// const greet = ()=>{
//     console.log(this);
// }

// // function meet(){
// //     console.log(this);
// // }

// greet();

// // 'use strict'

// const user = {
//     name:"Rohit",
//     greet: function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }

// user.greet();




// const stopWatch = {
//     second:0,
//     start: function(){

//         const that = this;
//         setInterval(function(){
//           that.second++;
//           console.log(that.second);
//         },1000);
//     }
// }

// const stopWatch = {
//     second:0,
//     start: function(){
//          console.log(this);
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000)
//     }
// };

// stopWatch.start();
// 'use strict'

// console.log(this);


// const user = {
//     name:"Rohit",
//     greet: ()=>{
//         console.log(this);
//     }
// }



// user.greet();


// const button = document.getElementById("first");


// button.addEventListener('click',()=>{
//     console.log(this);
// })



// this keyword: Global scope in Node Js: {}
// Windows: window Object

// function: this keyword, if someone invoke the method or function, this will point to that
// Normal function: When no one is invoking it,
// Non-strict: Global Object for node and browser
// strict mode: Undefined

// arrow function: It takes this from its lexical environment scope

// 'use strict'
function greet(){
    console.log(this);
}

greet();