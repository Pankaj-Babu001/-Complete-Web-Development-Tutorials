// file: non-blocking-startup.js

console.log('1 - App starting...');

// Non-blocking async initialization
(async function() {
    console.log('2 - Starting background initialization...');

    // Simulate heavy startup work
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Initialize services
    const config = await fetch('/api/config').then(r => r.json());
    const user = await fetch('/api/user').then(r => r.json());

    console.log('4 - Background initialization complete');
    console.log('Config:', config);
    console.log('User:', user);
})().catch(error => {
    console.error('Initialization failed:', error);
});

// Main thread continues immediately
console.log('3 - App UI ready, initialization running in background');

// User can interact with UI immediately
document.addEventListener('DOMContentLoaded', () => {
    console.log('5 - UI fully loaded and interactive');
});

// OUTPUT:
// 1 - App starting...
// 2 - Starting background initialization...
// 3 - App UI ready, initialization running in background
// 5 - UI fully loaded and interactive
// (3 seconds later)
// 4 - Background initialization complete
