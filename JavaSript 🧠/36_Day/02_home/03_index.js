// file: timing-comparison.js (ES module)

// Method 1: With Top-Level Await (sequential)
console.time('TLA Total Time');

const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
const userData = await userResponse.json();
console.log('TLA - User fetched');

const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const postsData = await postsResponse.json();
console.log('TLA - Post fetched');

console.timeEnd('TLA Total Time');

// Method 2: Without TLA (parallel)
console.time('Non-TLA Total Time');

async function fetchBothParallel() {
    const [userReq, postReq] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
    ]);

    const [user, post] = await Promise.all([
        userReq.json(),
        postReq.json()
    ]);

    console.log('Non-TLA - Both fetched in parallel');
    console.timeEnd('Non-TLA Total Time');
    return { user, post };
}

fetchBothParallel();

// Typical output:
// TLA - User fetched
// TLA - Post fetched
// TLA Total Time: 450ms
// Non-TLA - Both fetched in parallel
// Non-TLA Total Time: 230ms