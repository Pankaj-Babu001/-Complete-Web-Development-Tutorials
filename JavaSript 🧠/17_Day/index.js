// variable ko kaise banate hai

// let name = "Pankaj";
// let age = 20;
// if(true){
//     let c = 90;
// }
// age = 30;
// console.log(c);
// console.log(name , age);

const account = 455629562;

// account = 23;

console.log(account);




// old tarika
// var a = 10;
// var a = 20;

// if(true){
//    var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b = 30;
// console.log(c);


// data types

// primitive data type

// number,string,boolean,undefined, null, bigint, symbol


// number
// let a = 20;
// let b = 16.12;
// console.log(a,b);
// console.log(typeof b);


// // string

// let c = "Strike is coming soon";
// let d = 'Pankaj';
// console.log(typeof d);
// console.log(c,d);


// // boolean
// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);


// // undefined

// let user;
// console.log(typeof user);
// const p = 10;

// console.log(user);

// bigint
// let num = 46661645106313018452n;
// console.log(typeof num);
// console.log(num);


// null
// let weather = null;
// console.log(typeof weather);

// let weather = current_weather("Patna")
// 28.0
// null
// undefined


// symbol

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1);

// Non Primitive Data type
// array, object, function

// let arr = [10,20,11,"Pankaj",true];
// console.log(typeof arr);

// console.log(arr);

// Pankaj 12312 18 BC

// let user = {
//     name:"Pankaj",
//     account:12312,
//     age:19,
//     category:'BC'
// }

// console.log(typeof user);

// let s = function add(){
//     console.log("Hello");
// }

// console.log(typeof s);




// Primitive data type is immutable

// let a = 10;
// let b = a;

// b = 20;
// console.log(a, b);

// let str = "Pankaj";
// str = "Saroj";

// console.log(str[0]);


// Non primitive data type mutable

let arr = [10,20,30,40];

arr.push(45);
arr[0] = 40;
console.table(arr);

let obj ={
    name:"Saroj",
    age:20
}

let obj2 = obj;

obj2.name = "Saroj";

console.table(obj);