// Test script to run in both environments
function testThisBehavior() {
    console.log("=== Global Context ===");
    console.log("this:", this);
    console.log("this === global:", this === global);
    console.log("this === window:", typeof window !== 'undefined' ? this === window : 'No window');

    console.log("=== Function Context ===");
    function regularFunction() {
        console.log("Regular function this:", this);
    }

    const arrowFunction = () => {
        console.log("Arrow function this:", this);
    };

    regularFunction();
    arrowFunction();

    console.log("=== Object Method ===");
    const testObj = {
        name: "Test",
        regularMethod: function() {
            console.log("Regular method this:", this);
        },
        arrowMethod: () => {
            console.log("Arrow method this:", this);
        }
    };

    testObj.regularMethod();
    testObj.arrowMethod();
}

// Module context check
console.log("=== Module Context ===");
console.log("this in module:", this);
console.log("this === module.exports:", this === module.exports);
console.log("this === exports:", this === exports);

testThisBehavior();