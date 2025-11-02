// Code Example with Event Loop Flow
console.log('Script Start'); // 1. Synchronous

setTimeout(() => {
    console.log('setTimeout'); // 5. Macro task
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1'); // 3. Micro task
}).then(() => {
    console.log('Promise 2'); // 4. Micro task
});

console.log('Script End'); // 2. Synchronous

// Output Order:
// Script Start
// Script End  
// Promise 1
// Promise 2
// setTimeout