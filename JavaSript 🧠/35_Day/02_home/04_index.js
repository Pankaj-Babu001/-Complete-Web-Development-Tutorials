// --- File: parallel_vs_serial.js ---

function fakeFetch(url, delayMs) {
    console.log(`\nStarting fetch for ${url}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Finished fetch for ${url}.`);
            resolve(`Data from ${url}`);
        }, delayMs);
    });
}

const API_A = 'API_Service_A';
const API_B = 'API_Service_B';

// --- Part 1: Top-Level Await (Serial Execution) ---
console.log('--- STARTING SERIAL TLA COMPARISON ---');
const startTLA = Date.now();

// Execution is blocked and waits 1500ms for A, then 1000ms for B.
// Total time should be ~2500ms (1500 + 1000).
const dataA_TLA = await fakeFetch(API_A, 1500);
const dataB_TLA = await fakeFetch(API_B, 1000);

const endTLA = Date.now();
console.log(`\n✅ TLA Results: ${dataA_TLA} and ${dataB_TLA}`);
console.log(`TLA Total Time:${endTLA - startTLA}ms (Approx 2500ms)`);

console.log('\n======================================');
console.log('This log is blocked until TLA completes.');
console.log('======================================\n');

// --- Part 2: Parallel Async Execution (Non-Blocking) ---
// Note: This part executes *after* Part 1 because TLA is globally blocking.
async function parallelFetch() {
    console.log('--- STARTING PARALLEL COMPARISON (Promise.all) ---');
    const startParallel = Date.now();

    // The two promises are INITIATED and run CONCURRENTLY
    const promiseA = fakeFetch(API_A, 1500);
    const promiseB = fakeFetch(API_B, 1000);

    // Promise.all waits for the *longest* promise to finish (1500ms)
    const [dataA, dataB] = await Promise.all([promiseA, promiseB]);

    const endParallel = Date.now();
    console.log(`\n✅ Parallel Results: ${dataA} and ${dataB}`);
    console.log(`Parallel Total Time:${endParallel - startParallel} ms (Approx 1500ms)`);
}

// Since TLA is blocking, we wrap the parallel logic in an async function call
// that happens *after* the TLA block.
parallelFetch();