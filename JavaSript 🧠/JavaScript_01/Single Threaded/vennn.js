// JAVASCRIPT RUNTIME - MAIN POINTS WITH CODE
// File: runtime.js

// ============================================================
// MAIN POINT 1: CALL STACK (Synchronous - waits for each step)
// ============================================================

console.log("=== POINT 1: CALL STACK ===");
console.log("1. First");

function greet(name) {
    console.log("Hello, " + name);
}

greet("Ali");        // Waits for this to finish
console.log("2. Last");

// Output:
// 1. First
// Hello, Ali
// 2. Last


// ============================================================
// MAIN POINT 2: WEB APIs (Asynchronous - does not wait)
// ============================================================

console.log("\n=== POINT 2: WEB APIs ===");
console.log("Start");

setTimeout(() => {
    console.log("After 2 seconds");
}, 2000);

console.log("End");  // Runs immediately, does not wait!

// Output:
// Start
// End
// After 2 seconds (arrives later)


// ============================================================
// MAIN POINT 3: QUEUE (Where callbacks wait)
// ============================================================

console.log("\n=== POINT 3: QUEUE ===");
console.log("A");

setTimeout(() => {
    console.log("B - Waiting in queue");
}, 0);  // Even 0 milliseconds goes to queue!

console.log("C");

// Output:
// A
// C
// B - Waiting in queue


// ============================================================
// MAIN POINT 4: EVENT LOOP (Checks: Is Call Stack empty?)
// ============================================================

console.log("\n=== POINT 4: EVENT LOOP ===");
console.log("1. Start");

setTimeout(() => {
    console.log("3. From queue to stack");
}, 1000);

console.log("2. End");

// Event Loop steps:
// Step 1: Call Stack runs "1. Start"
// Step 2: Call Stack runs "2. End"
// Step 3: Call Stack is empty now
// Step 4: Event Loop checks - "Is Call Stack empty?"
// Step 5: YES! Event Loop takes callback from queue
// Step 6: Puts callback in Call Stack
// Step 7: Call Stack runs "3. From queue to stack"

// Output:
// 1. Start
// 2. End
// 3. From queue to stack


// ============================================================
// COMPLETE EXAMPLE - ALL PARTS WORKING TOGETHER
// ============================================================

console.log("\n=== COMPLETE EXAMPLE (ALL PARTS) ===");

// Call Stack - runs immediately
console.log("A");

// Web API - setTimeout (goes to queue after delay)
setTimeout(() => {
    console.log("B");
}, 1000);

// Call Stack - runs immediately
console.log("C");

// Web API - Promise (goes to queue, high priority)
Promise.resolve().then(() => {
    console.log("D");
});

// Call Stack - runs immediately
console.log("E");

// EXECUTION ORDER:
// Call Stack runs: A → C → E
// Event Loop checks: Call Stack empty?
// YES! Move queue items to stack
// Promises run first (high priority): D
// Then setTimeout: B

// Output:
// A
// C
// E
// D
// B


// ============================================================
// KEY CONCEPT: Why JavaScript does not freeze?
// ============================================================

console.log("\n=== KEY CONCEPT: NO FREEZE ===");
console.log("Start fetching");

// This does not freeze the program!
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Got data:", data.title));

console.log("Program continues, not frozen!");

// Output:
// Start fetching
// Program continues, not frozen!
// Got data: sunt aut facere repellat (arrives later)