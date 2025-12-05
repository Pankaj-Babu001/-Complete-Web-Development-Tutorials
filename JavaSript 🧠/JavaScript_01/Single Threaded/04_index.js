console.log("Script start");

// Macro Task (Task Queue)
setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

// Micro Task (Microtask Queue - higher priority)
Promise.resolve().then(() => {
    console.log("Promise 1");
});

// Another Macro Task
setTimeout(() => {
    console.log("setTimeout 2");
    // Micro Task inside Macro Task
    Promise.resolve().then(() => {
        console.log("Promise inside setTimeout");
    });
}, 0);

// Another Micro Task
Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("Script end");

// Execution Order:
// Script start
// Script end
// Promise 1
// Promise 2
// setTimeout 1
// setTimeout 2
// Promise inside setTimeout