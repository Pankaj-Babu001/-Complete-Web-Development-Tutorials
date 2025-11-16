// Original with bind()
class Counter {
    constructor() {
        this.count = 0;

        // Using bind to fix 'this'
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.count++;
        console.log("Count:", this.count);
    }

    decrement() {
        this.count--;
        console.log("Count:", this.count);
    }
}

// Converted to arrow functions
class CounterArrow {
    constructor() {
        this.count = 0;

        // Arrow functions automatically bind 'this'
        this.increment = () => {
            this.count++;
            console.log("Arrow Count:", this.count);
        };

        this.decrement = () => {
            this.count--;
            console.log("Arrow Count:", this.count);
        };
    }
}

// Test both
const counter1 = new Counter();
const counter2 = new CounterArrow();

// Both work correctly when passed as callbacks
setTimeout(counter1.increment, 100); // Works due to bind()
setTimeout(counter2.increment, 200); // Works due to arrow function