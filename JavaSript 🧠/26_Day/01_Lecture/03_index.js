// Higher order function

function double(value){
    return function execute(num){
        return num*value;
    }
}
// const n = double(20);
// console.log(n(10));

const n = double(20) (10);
console.log(n);