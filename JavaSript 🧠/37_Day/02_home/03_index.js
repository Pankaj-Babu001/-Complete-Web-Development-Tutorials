// Function 1: Global context
function globalFunction() {
    console.log("Function 1 - Global:", this);
    // Prediction: In browser: Window, In Node: global object
}

// Function 2: Object method
const obj = {
    name: "Test Object",
    method() {
        console.log("Function 2 - Object method:", this);
        // Prediction: The obj object itself
    }
};

// Function 3: Arrow function in object
const objWithArrow = {
    name: "Arrow Object",
    arrow: () => {
        console.log("Function 3 - Arrow in object:", this);
        // Prediction: Inherits from outer scope (global/Window)
    }
};

// Function 4: Constructor function
function Person(name) {
    this.name = name;
    console.log("Function 4 - Constructor:", this);
    // Prediction: New instance of Person
}

// Function 5: Event handler (simulated)
const button = {
    click() {
        console.log("Function 5 - Method as handler:", this);
        // Prediction: The button object
    }
};

// Run predictions
globalFunction();
obj.method();
objWithArrow.arrow();
new Person("Alice");
button.click();