// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
/*
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
*/

/*
function append(value, array = []) {
    array.push(value);
    return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
*/


/*
function callSomething(thing = something()) {
    return thing;
}

let numberOfTimesCalled = 0;
function something() {
    numberOfTimesCalled += 1;
    return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
*/


/*
function greet(name, greeting, message = `${greeting} ${name}`) {
    return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
*/



/*
function go() {
    return ":P";
}

function withDefaults(
    a,
    b = 5,
    c = b,
    d = go(),
    e = this,
    f = arguments,
    g = this.value,
) {
    return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
    switch (arguments.length) {
        case 0:
        case 1:
            b = 5;
        case 2:
            c = b;
        case 3:
            d = go();
        case 4:
            e = this;
        case 5:
            f = arguments;
        case 6:
            g = this.value;
    }
    return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

*/

/*
function preFilledArray([x = 1, y = 2] = []) {
    return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
    return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
*/