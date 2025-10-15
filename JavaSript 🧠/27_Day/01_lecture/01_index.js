// forEach, filter, reducer, map, set

// const arr = [10,20,30,5,90,87];
// let sum = 0;

// arr.forEach((number)=>{
//     sum+=number;
// })

// console.log(sum);

//
// let obj = {
//     name:"Pankaj",
//     deposit: function(amount){
//         console.log(amount);
//     }
// }
//
// obj.deposit(100);

// filter

// const arr = [10,20,30,5,90,87];
// true: select, false: not selected
// const newArr = arr.filter((number)=> number>25);

// console.log(newArr);
// this = [10,20,30,5,90,87];

// const compare = (number)=> number>25;
// compare(20);

// Array.prototype.filtering = function(compare){

//     const ans = [];
//     for(let num of this){
//        if(compare(num)){
//         ans.push(num);
//        }
//     }

//     return ans;
// }

// const newArr = arr.filtering((num)=>num>25);

// console.log(newArr);
//
// const a = [80,30,15,31,42,70]
// const answer = a.filtering((num)=>num>25);
// console.log(answer);


const arr = [10,20,30,5,90,87];

const newArr = arr.map((num)=> num*3);
console.log(newArr);

