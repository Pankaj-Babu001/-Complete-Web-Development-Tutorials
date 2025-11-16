// file: tla-demo.js (ES module)
// console.log('1 - Script starts');
//
// // This will block subsequent execution
// const data = await new Promise(resolve => {
//     console.log('2 - Starting async operation');
//     setTimeout(() => {
//         console.log('4 - Async operation completed');
//         resolve('TLA Data');
//     }, 2000);
// });
//
// console.log('5 - Data:', data);
// console.log('6 - Script ends');
//
// // OUTPUT:
// // 1 - Script starts
// // 2 - Starting async operation
// // (2 second pause)
// // 4 - Async operation completed
// // 5 - Data: TLA Data
// // 6 - Script ends





console.log('1 - Script starts');

// This doesn't block
async function fetchData() {
    const data = await new Promise(resolve => {
        console.log('2 - Starting async operation');
        setTimeout(() => {
            console.log('4 - Async operation completed');
            resolve('Async Data');
        }, 2000);
    });
    console.log('5 - Data:', data);
}

fetchData();
console.log('3 - Script continues immediately');

// OUTPUT:
// 1 - Script starts
// 2 - Starting async operation
// 3 - Script continues immediately
// (2 second pause)
// 4 - Async operation completed
// 5 - Data: Async Data