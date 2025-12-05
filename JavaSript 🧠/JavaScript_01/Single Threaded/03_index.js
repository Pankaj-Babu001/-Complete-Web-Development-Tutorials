function demonstrateEventLoop() {
    console.log("🔵 Step 1: Sync code - Call Stack");

    // Web APIs area - setTimeout
    setTimeout(() => {
        console.log("🟡 Step 4: setTimeout - Task Queue");
    }, 0);

    // Web APIs area - fetch (simulated)
    fetchData().then(data => {
        console.log("🟢 Step 5: fetch - Microtask Queue");
    });

    // Microtask - higher priority
    Promise.resolve().then(() => {
        console.log("🟢 Step 3: Promise - Microtask Queue");
    });

    console.log("🔵 Step 2: Sync code - Call Stack");
}

// Simulate fetch API
function fetchData() {
    return new Promise(resolve => {
        // This setTimeout simulates network delay
        setTimeout(() => {
            resolve("Data received");
        }, 0);
    });
}

demonstrateEventLoop();

// Expected output:
// 🔵 Step 1: Sync code - Call Stack
// 🔵 Step 2: Sync code - Call Stack
// 🟢 Step 3: Promise - Microtask Queue
// 🟡 Step 4: setTimeout - Task Queue
// 🟢 Step 5: fetch - Microtask Queue