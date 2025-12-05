/*

// 📦 Food Delivery System - Callback Hell Example

function placeOrder(orderId, callback) {
    console.log(`🍕 Placing order #${orderId}...`);
    setTimeout(() => {
        console.log(`✅ Order #${orderId} placed!`);
        callback(orderId);
    }, 1000);
}

function prepareOrder(orderId, callback) {
    console.log(`👨‍🍳 Preparing order #${orderId}...`);
    setTimeout(() => {
        console.log(`✅ Order #${orderId} prepared!`);
        callback(orderId);
    }, 2000);
}

function pickupOrder(orderId, callback) {
    console.log(`🚗 Picking up order #${orderId}...`);
    setTimeout(() => {
        console.log(`✅ Order #${orderId} picked up!`);
        callback(orderId);
    }, 1500);
}

function deliverOrder(orderId, callback) {
    console.log(`🏠 Delivering order #${orderId}...`);
    setTimeout(() => {
        console.log(`🎉 Order #${orderId} delivered!`);
        callback(orderId);
    }, 3000);
}
/*********************** Callback Hell *****************************
*/



// 🔥 ENTERING CALLBACK HELL 🔥

function processFoodDelivery(orderId) {
    placeOrder(orderId, function(order) {
        prepareOrder(order, function(preparedOrder) {
            pickupOrder(preparedOrder, function(pickedOrder) {
                deliverOrder(pickedOrder, function(deliveredOrder) {
                    console.log(`📱 Sending notification: Order ${deliveredOrder} delivered!`);

                    // 😫 Even deeper nesting for additional steps
                    sendRatingRequest(deliveredOrder, function() {
                        updateAnalytics(deliveredOrder, function() {
                            cleanupOrder(deliveredOrder, function() {
                                console.log("🏁 Delivery process completed!");
                            });
                        });
                    });
                });
            });
        });
    });
}

// Additional nested functions
function sendRatingRequest(orderId, callback) {
    setTimeout(() => {
        console.log(`⭐ Rating request sent for order #${orderId}`);
        callback();
    }, 500);
}

function updateAnalytics(orderId, callback) {
    setTimeout(() => {
        console.log(`📊 Analytics updated for order #${orderId}`);
        callback();
    }, 300);
}

function cleanupOrder(orderId, callback) {
    setTimeout(() => {
        console.log(`🧹 Cleanup completed for order #${orderId}`);
        callback();
    }, 200);
}

// 🚀 Run the callback hell
processFoodDelivery(123);

// Output will show the step-by-step process of the food delivery system with deep nesting of callbacks.