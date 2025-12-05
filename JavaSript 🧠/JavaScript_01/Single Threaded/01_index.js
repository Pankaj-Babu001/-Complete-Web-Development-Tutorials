/*console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0);

console.log('Third');

// Output:
// First
// Third
// Second

*/

/*
console.log("First");
let sum = 0;

for (let i = 0; i < 1000000; i++) {
    sum += i;
}
console.log(sum);
console.log("last");


 */

/*
// BAD - blocks for 3 seconds
function blockingTask() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Done');
}

blockingTask(); // UI freezes, nothing else can run


 */

/*
// GOOD - doesn't block
async function nonBlockingTask() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Done');
}

nonBlockingTask(); // Other code can run during the wait

 */

/*
console.log("Hello World");

setTimeout(()=> {
    console.log("Time Out Executed 1");
},5000);

setTimeout(()=> {
    console.log("Time Out Executed 2");
},6000);

setTimeout(()=> {
    console.log("I am End!");
},5000);

*/


// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.push(11);

// console.log(arr);
// arr.map(x=> x*10);

// console.log(arr);

function hello(){
    console.log("Hello There!");
}

hello();












































