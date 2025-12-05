// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.


// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// console.table(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]



// async param => expression
// async (param1, param2, ...paramN) => {
//     statements
// }



// Traditional anonymous function
// (function (a) {
//     return a + 100;
// });

// 1. Remove the word "function" and place arrow between the argument and opening body brace
// (a) => {
//     return a + 100;
// };

// 2. Remove the body braces and word "return" — the return is implied.
// (a) => a + 100;

// 3. Remove the parameter parentheses
// a => a + 100;



/*
function foo(n) {
    const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
    return f();
}

foo(3); // 3 + 3 = 6



const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false

*/


"use strict";

const obj = {
    a: 10,
};

Object.defineProperty(obj, "b", {
    get: () => {
        console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
        return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
    },
});

/*
class C {
    a = 1;
    autoBoundMethod = () => {
        console.log(this.a);
    };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// If it were a normal method, it should be undefined in this case
*/

// const obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c() {
//         console.log(this.i, this);
//     },
// };
//
// obj.b(); // logs undefined, Window { /* … */ } (or the global object)
// obj.c(); // logs 10, Object { /* … */ }


// const Foo = () => {};
// const Foo = new Foo(); // TypeError: Foo is not a constructor
// console.log("prototype" in Foo); // false




/*
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
    .then((a) => {
        // …
    })
    .then((b) => {
        // …
    });

// Arrow functions without parameters
setTimeout(() => {
    console.log("I happen sooner");
    setTimeout(() => {
        // deeper code
        console.log("I happen later");
    }, 1);
}, 1);

*/

// const obj = {
//     num: 100,
// };

// Setting "num" on globalThis to show how it is NOT used.
// globalThis.num = 42;

// A traditional function to operate on "this"
// function add(a, b, c) {
//     return this.num + a + b + c;
// }

// console.log(add.call(obj, 1, 5, 3)); // 109
// console.log(add.apply(obj, [1, 14, 3])); // 118
// const boundAdd = add.bind(obj);
// console.log(boundAdd(1, 2, 3)); // 106

// const obj = {
//     num: 100,
// };

// Setting "num" on globalThis to show how it gets picked up.
// globalThis.num = 42;

// Arrow function
// const add = (a, b, c) => this.num + a + b + c;

// console.log(add.call(obj, 1, 2, 3)); // 48
// console.log(add.apply(obj, [1, 2, 3])); // 48
// const boundAdd = add.bind(obj);
// console.log(boundAdd(1, 2, 3)); // 48

// const obj = {
//     count: 10,
//     doSomethingLater() {
//         setTimeout(function () {
//             // the function executes on the window scope
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     },
// };
//
// obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.

/*
const obj = {
    count: 10,
    doSomethingLater() {
        // The method syntax binds "this" to the "obj" context.
        setTimeout(() => {
            // Since the arrow function doesn't have its own binding and
            // setTimeout (as a function call) doesn't create a binding
            // itself, the "obj" context of the outer method is used.
            this.count++;
            console.log(this.count);
        }, 300);
    },
};

obj.doSomethingLater(); // logs 11

*/


