// CALLBACK HELL IN JAVASCRIPT - COMPLETE TUTORIAL
// File: callbackHell.js

// ============================================================
// WHAT IS A CALLBACK?
// ============================================================

console.log("=== WHAT IS A CALLBACK? ===");

// A callback is a function passed to another function
// It runs after something happens

function orderFood(foodName, callback) {
    console.log("Ordering: " + foodName);
    callback();
}

function afterOrderingFood() {
    console.log("Food order placed!");
}

orderFood("Pizza", afterOrderingFood);
// Output:
// Ordering: Pizza
// Food order placed!


// ============================================================
// WHAT IS CALLBACK HELL? (Pyramid of Doom)
// ============================================================

console.log("\n=== CALLBACK HELL EXAMPLE ===");

// Problem: Multiple nested callbacks create "Pyramid of Doom"

function placeOrder(orderId, callback) {
    console.log("1. Placing order: " + orderId);
    setTimeout(() => {
        callback(orderId);
    }, 1000);
}

function prepareOrder(orderId, callback) {
    console.log("2. Preparing order: " + orderId);
    setTimeout(() => {
        callback(orderId);
    }, 1000);
}

function pickupOrder(orderId, callback) {
    console.log("3. Picking up order: " + orderId);
    setTimeout(() => {
        callback(orderId);
    }, 1000);
}

function deliverOrder(orderId, callback) {
    console.log("4. Delivering order: " + orderId);
    setTimeout(() => {
        callback(orderId);
    }, 1000);
}

// THIS IS CALLBACK HELL (Pyramid of Doom)
placeOrder(1, function(orderId) {
    console.log("   ✓ Order placed");

    prepareOrder(orderId, function(orderId) {
        console.log("   ✓ Order prepared");

        pickupOrder(orderId, function(orderId) {
            console.log("   ✓ Order picked up");

            deliverOrder(orderId, function(orderId) {
                console.log("   ✓ Order delivered");
            });
        });
    });
});

// Output:
// 1. Placing order: 1
//    ✓ Order placed
// 2. Preparing order: 1
//    ✓ Order prepared
// 3. Picking up order: 1
//    ✓ Order picked up
// 4. Delivering order: 1
//    ✓ Order delivered


// ============================================================
// 8 MAJOR PROBLEMS CAUSED BY CALLBACK HELL
// ============================================================

console.log("\n=== 8 PROBLEMS OF CALLBACK HELL ===");

// PROBLEM 1: Hard to Read
console.log("\nPROBLEM 1: Hard to Read");
console.log("Deep nesting makes code look like a pyramid");
console.log("Difficult to follow the logic");

// PROBLEM 2: Hard to Debug
console.log("\nPROBLEM 2: Hard to Debug");
console.log("Where is the error? Deep inside nested functions?");
console.log("Error stack traces are confusing");

// PROBLEM 3: Hard to Maintain
console.log("\nPROBLEM 3: Hard to Maintain");
console.log("Adding new features requires modifying nested code");
console.log("Risk of breaking existing functionality");

// PROBLEM 4: Hard to Test
console.log("\nPROBLEM 4: Hard to Test");
console.log("Can't test individual callbacks easily");
console.log("Must test entire chain of callbacks");

// PROBLEM 5: Inversion of Control
console.log("\nPROBLEM 5: Inversion of Control");
console.log("You give callback to another function");
console.log("You lose control of when it runs");
console.log("Other function decides to run your code or not");

// PROBLEM 6: Error Handling is Messy
console.log("\nPROBLEM 6: Error Handling is Messy");
console.log("Must check for errors at each level");
console.log("Error handling code is scattered everywhere");

// PROBLEM 7: Repeat Code
console.log("\nPROBLEM 7: Repeat Code");
console.log("Similar callback patterns repeated many times");
console.log("No reusable structure");

// PROBLEM 8: Variable Scope Issues
console.log("\nPROBLEM 8: Variable Scope Issues");
console.log("Too many variables in nested scopes");
console.log("Easy to get confused about which variable is which");


// ============================================================
// REAL-WORLD FOOD DELIVERY SYSTEM EXAMPLE
// ============================================================

console.log("\n=== REAL-WORLD FOOD DELIVERY EXAMPLE ===");

function foodDeliverySystem(customerId, restaurantId, address, payment) {

    // Step 1: Place Order
    placeOrderStep(customerId, restaurantId, function(orderId) {
        console.log("✓ Order #" + orderId + " placed successfully");

        // Step 2: Prepare Food
        prepareFoodStep(orderId, function(preparedOrderId) {
            console.log("✓ Order #" + preparedOrderId + " food prepared");

            // Step 3: Assign Delivery Person
            assignDeliveryStep(preparedOrderId, function(assignedOrderId) {
                console.log("✓ Order #" + assignedOrderId + " assigned to delivery person");

                // Step 4: Pickup from Restaurant
                pickupFromRestaurantStep(assignedOrderId, function(readyOrderId) {
                    console.log("✓ Order #" + readyOrderId + " picked up from restaurant");

                    // Step 5: Deliver to Customer
                    deliverToCustomerStep(readyOrderId, address, function(deliveredOrderId) {
                        console.log("✓ Order #" + deliveredOrderId + " delivered to customer!");

                        // Step 6: Process Payment
                        processPaymentStep(payment, function(paymentStatus) {
                            console.log("✓ Payment " + paymentStatus);
                            console.log("✓✓✓ ALL STEPS COMPLETED! ✓✓✓");
                        });
                    });
                });
            });
        });
    });
}

function placeOrderStep(customerId, restaurantId, callback) {
    setTimeout(() => {
        let orderId = Math.floor(Math.random() * 10000);
        callback(orderId);
    }, 500);
}

function prepareFoodStep(orderId, callback) {
    setTimeout(() => {
        callback(orderId);
    }, 500);
}

function assignDeliveryStep(orderId, callback) {
    setTimeout(() => {
        callback(orderId);
    }, 500);
}

function pickupFromRestaurantStep(orderId, callback) {
    setTimeout(() => {
        callback(orderId);
    }, 500);
}

function deliverToCustomerStep(orderId, address, callback) {
    setTimeout(() => {
        callback(orderId);
    }, 500);
}

function processPaymentStep(payment, callback) {
    setTimeout(() => {
        callback("SUCCESS");
    }, 500);
}

// foodDeliverySystem(1, 101, "123 Main St", 29.99);


// ============================================================
// PYRAMID OF DOOM VISUALIZATION
// ============================================================

console.log("\n=== PYRAMID OF DOOM VISUALIZATION ===");
console.log(`
function doSomething() {
  doFirst(function() {          // Level 1
    doSecond(function() {        // Level 2
      doThird(function() {       // Level 3
        doFourth(function() {    // Level 4
          doFifth(function() {   // Level 5 - Getting out of control!
            console.log("Done");
          });
        });
      });
    });
  });
}

This looks like a pyramid (or doom!) →
The indentation keeps increasing
Code becomes unreadable
Becomes a "Callback Hell"
`);


// ============================================================
// WHY JAVASCRIPT NEEDS CALLBACKS
// ============================================================

console.log("\n=== WHY JAVASCRIPT NEEDS CALLBACKS ===");

console.log("JavaScript is SINGLE-THREADED");
console.log("- Only one line of code runs at a time");
console.log("- Cannot wait for slow operations (network, database)");
console.log("- Callbacks allow code to run later when ready");
console.log("- This is called ASYNCHRONOUS programming");

console.log("\nWithout callbacks (would freeze):");
console.log("  fetchData();  // Waits 5 seconds... frozen!");
console.log("  doOtherStuff();  // Never reaches here");

console.log("\nWith callbacks (does not freeze):");
console.log("  fetchData(function() {");
console.log("    doOtherStuff();  // Runs when data arrives");
console.log("  });");
console.log("  doMoreStuff();  // Runs immediately!");


// ============================================================
// SUMMARY: CALLBACK HELL PROBLEMS
// ============================================================

console.log("\n=== SUMMARY: CALLBACK HELL ===");
console.log("Callback Hell = Deeply nested callbacks");
console.log("Also called = Pyramid of Doom");
console.log("\n8 Problems:");
console.log("1. Hard to read");
console.log("2. Hard to debug");
console.log("3. Hard to maintain");
console.log("4. Hard to test");
console.log("5. Inversion of control");
console.log("6. Error handling is messy");
console.log("7. Code repetition");
console.log("8. Variable scope issues");
console.log("\nSolutions (in next lessons):");
console.log("- Promises");
console.log("- Async/Await");
console.log("- Named functions instead of anonymous");