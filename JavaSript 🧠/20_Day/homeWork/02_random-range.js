// Function to generate random numbers between any min-max range

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomIntegerInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Test the functions
console.log("=== Random Number Generator ===");

// Floating point numbers between range
console.log("\nFloating point numbers between 5 and 15:");
for (let i = 0; i < 5; i++) {
    console.log(getRandomInRange(5, 15));
}

// Integer numbers between range
console.log("\nInteger numbers between 1 and 10:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomIntegerInRange(1, 10));
}

// Different ranges
console.log("\nNumbers between -5 and 5:");
for (let i = 0; i < 5; i++) {
    console.log(getRandomInRange(-5, 5));
}

// Utility function with inclusive/exclusive options
function randomNumber(min, max, options = {}) {
    const { integer = false, inclusive = true } = options;
    
    if (integer) {
        const adjustedMax = inclusive ? max : max - 1;
        return getRandomIntegerInRange(min, adjustedMax);
    } else {
        const adjustedMax = inclusive ? max : max - Number.EPSILON;
        return getRandomInRange(min, adjustedMax);
    }
}

console.log("\n=== Advanced Random Generator ===");
console.log("Integer between 1-10 (inclusive):", randomNumber(1, 10, { integer: true }));
console.log("Integer between 1-10 (exclusive max):", randomNumber(1, 10, { integer: true, inclusive: false }));
console.log("Float between 0-1 (exclusive max):", randomNumber(0, 1, { inclusive: false }));