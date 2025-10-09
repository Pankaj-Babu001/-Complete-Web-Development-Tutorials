function outer(x) {
    let count = 0;            // stored in outer's environment (heap when closed)
    function inner(y) {
        count += 1;
        return x + y + count;
    }
    return inner;
}

const f = outer(10); // outer runs, returns inner; closure captures { x:10, count:0 }
console.log(f(5));   // call #1 -> ?
console.log(f(7));   // call #2 -> ?
