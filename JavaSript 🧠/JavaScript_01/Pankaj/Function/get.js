/*
const obj = {
    log: ["A", "B", "C"],
    get latest() {
        return this.log[this.log.length - 1];
    },
};

console.log(obj.latest);
// Expected output: "c"
console.log(obj.log);

*/

/*
const obj = {
    log: ["example", "test"],
    get latest() {
        return this.log.at(-1);
    },
};
console.log(obj.latest); // "test"

*/

/*
class MyConstants {
    static get foo() {
        return "foo";
    }
}

console.log(MyConstants.foo); // 'foo'
MyConstants.foo = "bar";
console.log(MyConstants.foo); // 'foo', a static getter's value cannot be changed
*/

/*
class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
        return this.#msg;
    }
    set msg(x) {
        this.#msg = `hello ${x}`;
    }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
*/

/*
class Example {
    get hello() {
        return "world";
    }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined

console.log(
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
*/

/*
const obj = {
    get notifier() {
        delete this.notifier;
        this.notifier = document.getElementById("bookmarked-notification-anchor");
        return this.notifier;
    },
};
*/

/*
function isColorTypeSupported() {
    let supported = false;
    const obj = {
        get colorType() {
            supported = true;
            return undefined;
        },
    };
    document.createElement("canvas").getContext("2d", obj);
    return supported;
}
*/

