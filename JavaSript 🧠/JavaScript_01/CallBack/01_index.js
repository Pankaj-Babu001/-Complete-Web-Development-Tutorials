/* 🧠 What is Callback Hell?
    Callback Hell (also known as Pyramid of Doom) occurs when you have multiple nested callbacks, making code difficult to read and maintain.

*/


// ⚠️ THIS IS CALLBACK HELL! ⚠️
placeOrder(function(order) {
    prepareOrder(order, function(preparedOrder) {
        pickupOrder(preparedOrder, function(pickedOrder) {
            deliverOrder(pickedOrder, function(deliveredOrder) {
                sendNotification(deliveredOrder, function() {
                    // ... and it goes deeper!
                    updateDatabase(function() {
                        // 😵 More nesting!
                    });
                });
            });
        });
    });
});