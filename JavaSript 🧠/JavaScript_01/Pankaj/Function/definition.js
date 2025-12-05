/* ({
    property(parameters) {},
    *generator(parameters) {},
    async property(parameters) {},
    async *generator(parameters) {},

    // with computed keys
    [expression](parameters) {},
    *[expression](parameters) {},
    async [expression](parameters) {},
    async *[expression](parameters) {},
}) */

/*
const obj = {
    foo() {
        return "Pankaj";
    },
};

console.log(obj.foo());
// Expected output: "Pankaj"
*/

/*
class ClassWithPublicInstanceMethod {
    publicMethod() {
        return "hello world";
    }
    secondPublicMethod() {
        return "goodbye world";
    }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod()); // "hello world"

 */

/*
class BaseClass {
    msg = "hello world";
    basePublicMethod() {
        return this.msg;
    }
}

class SubClass extends BaseClass {
    subPublicMethod() {
        return super.basePublicMethod();
    }
}

const instance = new SubClass();
console.log(instance.subPublicMethod()); // "hello world"

 */

/*
const bar = {
    foo0: function () {
        return 0;
    },
    foo1() {
        return 1;
    },
    ["foo".toUpperCase()]() {
        return 2;
    },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.FOO()); // 2
console.log(bar.foo1()); //

 */

/*
// Using a named property
const obj = {
    g: function* () {
        let index = 0;
        while (true) {
            yield index++;
        }
    },
};

// The same object using shorthand syntax
const obj2 = {
    *g() {
        let index = 0;
        while (true) {
            yield index++;
        }
    },
};

const it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3
*/

/*
// Using a named property
const obj = {
    f: async function () {
        await somePromise;
    },
};

// The same object using shorthand syntax
const obj2 = {
    async f() {
        await somePromise;
    },
};
*/


// Using a named property
const obj = {
    f: async function* () {
        yield 1;
        yield 2;
        yield 3;
    },
};

// The same object using shorthand syntax
const obj2 = {
    async *f() {
        yield 1;
        yield 2;
        yield 3;
    },
};