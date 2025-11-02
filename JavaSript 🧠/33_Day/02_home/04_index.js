// 🔥 CALLBACK HELL EXAMPLE - Food Delivery System

function placeOrder(orderId, callback) {
    console.log(`1. Placing order: ${orderId}`);
    
    prepareOrder(orderId, function(preparedOrder) {
        // 🚨 Level 1 Nesting
        console.log(`2. Order prepared: ${preparedOrder}`);
        
        pickupOrder(preparedOrder, function(pickedOrder) {
            // 🚨 Level 2 Nesting  
            console.log(`3. Order picked up: ${pickedOrder}`);
            
            deliverOrder(pickedOrder, function(deliveredOrder) {
                // 🚨 Level 3 Nesting - PYRAMID OF DOOM!
                console.log(`4. Order delivered: ${deliveredOrder}`);
                
                // Final callback
                callback(deliveredOrder);
            });
        });
    });
}

// Supporting functions
function prepareOrder(orderId, callback) {
    setTimeout(() => {
        callback(`Prepared-${orderId}`);
    }, 1000);
}

function pickupOrder(orderId, callback) {
    setTimeout(() => {
        callback(`PickedUp-${orderId}`);
    }, 500);
}

function deliverOrder(orderId, callback) {
    setTimeout(() => {
        callback(`Delivered-${orderId}`);
    }, 1500);
}

// Usage - The Hell begins!
placeOrder("PIZZA123", function(finalOrder) {
    console.log(`🎉 Final Status: ${finalOrder}`);
});