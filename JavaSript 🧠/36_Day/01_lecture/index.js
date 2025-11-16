// Prototype and classes

// const obj = {
//     name:"Pankaj Kumar",
//     age:19,
//     greet: function(){
//         console.log("Hii, Everyone!")
//     }
// };


// console.log(obj.greet());
// obj.greet()

// console.log(obj.hasOwnProperty("name")); // true
// console.log(obj.hasOwnProperty("names")); //false
// console.log(obj.toString()); // Object Object

// const arr = [20,40,60];
// console.log(arr.length);

//
// const obj2 = {
//     account:30
// }
//
// console.log(obj2.account); // 30
// console.log(obj2.age); // Undefine
// obj2.__proto__ = obj;
// console.log(obj.name);
// console.log(obj2.greet());
//
// console.log(obj.hasOwnProperty("name"))
//
//
// const obj1 = {
//     name:"Pankaj Kumar",
//     age:30,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
//
// const obj2 = {
//     name:"Saroj Kumar",
//     age:20,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
//
//
// const obj3 = {
//     name:"Suraj Kumar",
//     age:10,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}


// const person1 = new Person("Pankaj Kumar",10);
// const person2 = new Person("Saroj Kumar",20);
//
// console.log(person1);
// console.log(person2);
//
// const ob1 = {
//     name:"Suraj Kumar",
//     age:30,
//     greet: function(){
//
//     }
// };
//
// console.log(ob1);



class Customer extends Person{
  constructor(name,age,account,balance){
    super(name,age);
    this.account = account;
    this.balance = balance;
  }

  checkBalance(){
    return this.balance;
  }
}

const c1 = new Customer("Mohan",20,12,540);
console.log(c1.checkBalance());

const obj = {
    name:"Pankaj",
    age:20
}


const obj2 = Object.create(obj);
obj2.account = 10;
console.log(obj2.account);


