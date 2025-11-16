// --- File: async_iife_startup.js ---

console.log('1. Module loading continues...');

// --- Async IIFE for Startup ---
(async () => {
    console.log('\n2. 🚀 Starting ASYNC SETUP (inside IIFE)...');

    // 1. Database Connection Simulation
    const dbStatus = await new Promise(resolve => setTimeout(() => resolve('DB Connected'), 500));
    console.log(`3. Database Setup: ${dbStatus}`);

    // 2. Configuration Fetch Simulation
    const config = await new Promise(resolve => setTimeout(() => resolve({ port: 3000 }), 200));
    console.log('4. Config Loaded:', config);

    console.log('5. ✅ ASYNC SETUP FINISHED.');
})().catch(error => {
    console.error('Startup failed:', error);
});
// ------------------------------------

console.log('\n6. This log runs IMMEDIATELY after the IIFE is defined, BEFORE the setup is complete.');
console.log('7. The main application logic can start executing without waiting for the setup.');

// Output demonstrates non-blocking behavior:
// 1. Module loading continues...
// 6. This log runs IMMEDIATELY after the IIFE is defined, BEFORE the setup is complete.
// 7. The main application logic can start executing without waiting for the setup.
//
// 2. 🚀 Starting ASYNC SETUP (inside IIFE)...
// 4. Config Loaded: { port: 3000 }
// 3. Database Setup: DB Connected
// 5. ✅ ASYNC SETUP FINISHED.