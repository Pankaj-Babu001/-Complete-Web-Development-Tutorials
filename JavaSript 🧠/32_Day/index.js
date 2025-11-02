console.log('1: Script start');

setTimeout(() => {
  console.log('2: setTimeout 1 (0ms)');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('3: Promise 1');
  })
  .then(() => {
    console.log('4: Promise 2');
  });

setTimeout(() => {
  console.log('5: setTimeout 2 (0ms)');
}, 0);

Promise.resolve().then(() => {
  console.log('6: Promise 3');
});

console.log('7: Script end');

/* 
EXPECTED OUTPUT ORDER:
1: Script start
7: Script end
3: Promise 1
6: Promise 3
4: Promise 2
2: setTimeout 1 (0ms)
5: setTimeout 2 (0ms)

WHY THIS ORDER?
1. Synchronous code runs first (console.log statements)
2. Microtasks (Promises) execute before macrotasks
3. setTimeout callbacks are macrotasks - they run last
4. Promises in the same "batch" run in order they were created
*/