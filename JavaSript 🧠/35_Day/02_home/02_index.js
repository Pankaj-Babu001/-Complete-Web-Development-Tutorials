// --- File: async_rewrite.js ---

async function fetchDataAndLog() {
    console.log('1. Starting async fetch...');
    // Simulate an async operation (e.g., API call)
    const data = await new Promise(resolve => setTimeout(() => resolve('Rewritten Data'), 1000));
    console.log('2. Data fetched and resolved:', data);
    return data;
}

// Invoke the async function
fetchDataAndLog().then(() => {
    console.log('3. Async function finished execution.');
});

console.log('4. This message logs IMMEDIATELY because the async function is non-blocking.');

// Output will be:
// 4. This message logs IMMEDIATELY because the async function is non-blocking.
// 1. Starting async fetch...
// 2. Data fetched and resolved: Rewritten Data
// 3. Async function finished execution.