// Hoist-demo.js
console.log("before var:", aVar);      // -> undefined (declaration hoisted, init=undefined)
try {
    console.log("before let:", aLet);
} catch (e) {
    console.log("before let:", e.name);  // -> ReferenceError (TDZ)
}
try {
    console.log("before const:", aConst);
} catch (e) {
    console.log("before const:", e.name); // -> ReferenceError (TDZ)
}

let aVar = 1;
let aLet = 2;
const aConst = 3;

function test() {
    console.log("inside test, aVar:", aVar); // 1
    console.log("inside test, aLet:", aLet); // 2
    // aConst = 10; // -> TypeError if uncommented (cannot reassign const)
}

test();

// Output:
// before var: undefined
// before let: ReferenceError
// before const: ReferenceError
// inside test, aVar: 1
// inside test, aLet: 2
