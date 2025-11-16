// --- File: tla_freeze_demo.js ---

console.log('1. Script Start: This logs immediately.');

// Simulate a long, blocking async operation using TLA
// Execution pauses here until the Promise resolves (after 2 seconds)
console.log('2. Starting a blocking Top-Level Await...');
const result = await new Promise(resolve => setTimeout(() => resolve('TLA is done!'), 2000));
console.log('3. Top-Level Await Result:', result); // This waits for 2 seconds

// This log is BLOCKED by the TLA above
console.log('4. Script End: This log only appears AFTER the 2-second wait.');