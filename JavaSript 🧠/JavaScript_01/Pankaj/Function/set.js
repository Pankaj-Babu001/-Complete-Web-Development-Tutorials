/*
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: [],
};

language.current = "English";
language.current = "Hindi";

console.log(language.log);
// Expected output: Array ["English", "Hindi"]
*/

/*
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: [],
};

language.current = "English";
console.log(language.log); // ['English']

language.current = "Hindi";
console.log(language.log); // ['English', 'Hindi']

 */

/*
class ClassWithGetSet {

    #msg = "Hello world";
    get msg() {
        return this.#msg;
    }
    set msg(x) {
        this.#msg = `Hello ${x}`;
    }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "Hello world"

instance.msg = "Cake";
console.log(instance.msg); // "Hello cake"
*/

/*
const o = { a: 0 };

Object.defineProperty(o, "b", {
    set(x) {
        this.a = x / 2;
    },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5
*/

const expr = "foo";

const obj = {
    baz: "bar",
    set [expr](v) {
        this.baz = v;
    },
};

console.log(obj.baz); // "bar"

obj.foo = "baz";
// Run the setter

console.log(obj.baz); // "baz"



