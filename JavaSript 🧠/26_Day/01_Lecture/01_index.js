// Scope and closure, HOF
// Global-> Accessible to everyone
// functional —> accesible only to that function
// Block level scope—> accesible only to that Block

let a = 10;
const b = 20

if(true) {

    let d = 30;
    var e = 50;
}
console.log(e);

function greet (){
    let c = 30;
    console.log(c);
}
console.log(c);
greet();

let global = 30;
function greet(){
    let global = 40;
    function meet(){
        let global = 10;
        console.log(global);
    }
    meet();
}
greet();

function createCounter() {

    let count = 0;
    function increment () {
        count ++;
        return count;
        // console.log("I am increment function");
    }
    return increment;
}

// console.log(count);
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
