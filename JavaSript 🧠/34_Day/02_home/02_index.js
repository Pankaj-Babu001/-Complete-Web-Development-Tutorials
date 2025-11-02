// Zomato Application - Complete Order Flow

const orderDetail = {
    orderId: 123123,
    food: ["Pizza", "Biryani", "Cake"],
    cost: 1010,
    customer_name: "Pankaj",
    customer_location: "Buxar",
    restaurant_location: "Buxar"
}

// Step 1: Place Order and Process Payment
function placedOrder(orderDetail) {
    console.log(`💳 ${orderDetail.cost} Payment is in progress...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Payment is received and order placed successfully!");
            orderDetail.status = "placed";
            orderDetail.paymentDone = true;
            resolve(orderDetail);
        }, 2000);
    });
}

// Step 2: Check Availability and Prepare Food
function preparingOrder(orderDetail) {
    console.log(`🔍 Checking food availability...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Food availability check (100% success for complete order demo)
            const isAvailable = true; // Change to Math.random() < 0.5 for random testing
            
            if (isAvailable) {
                console.log(`👨‍🍳 Your food preparation started: ${orderDetail.food.join(", ")}`);
                console.log("⏳ Cooking in progress...");
                
                setTimeout(() => {
                    console.log("✅ Your order is now prepared!");
                    orderDetail.status = "prepared";
                    orderDetail.token = 10000144;
                    resolve(orderDetail);
                }, 3000);
            } else {
                console.log("❌ Food item is not available in restaurant");
                reject(new Error("Food item is not available in restaurant"));
            }
        }, 1000);
    });
}

// Step 3: Pickup Order from Restaurant
function pickupOrder(orderDetail) {
    console.log(`🏍️ Finding delivery partner...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Delivery boy availability check (100% success for complete order demo)
            const isDeliveryBoyAvailable = true; // Change to Math.random() < 0.5 for random testing
            
            if (isDeliveryBoyAvailable) {
                console.log(`🚴 Delivery boy is on the way to ${orderDetail.restaurant_location}`);
                
                setTimeout(() => {
                    console.log("✅ I have picked up the order from restaurant!");
                    orderDetail.status = "picked_up";
                    orderDetail.received = true;
                    resolve(orderDetail);
                }, 2000);
            } else {
                console.log("❌ Delivery boy is not available");
                reject(new Error("Delivery boy is not available"));
            }
        }, 1000);
    });
}

// Step 4: Deliver Order to Customer
function deliverOrder(orderDetail) {
    console.log(`🚚 Delivery boy is on the way to ${orderDetail.customer_location}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🎉 Order delivered successfully to " + orderDetail.customer_name + "!");
            orderDetail.status = "delivered";
            orderDetail.delivery = true;
            orderDetail.deliveredAt = new Date().toLocaleString();
            resolve(orderDetail);
        }, 3000);
    });
}

// Execute Complete Order Flow
console.log("========== ZOMATO ORDER STARTED ==========");
console.log(`📦 Order ID: ${orderDetail.orderId}`);
console.log(`👤 Customer: ${orderDetail.customer_name}`);
console.log(`📍 Location: ${orderDetail.customer_location}`);
console.log("==========================================\n");

placedOrder(orderDetail)
    .then((orderDetail) => {
        console.log("\n--- Moving to Food Preparation ---\n");
        return preparingOrder(orderDetail);
    })
    .then((orderDetail) => {
        console.log("\n--- Moving to Pickup Stage ---\n");
        return pickupOrder(orderDetail);
    })
    .then((orderDetail) => {
        console.log("\n--- Moving to Delivery Stage ---\n");
        return deliverOrder(orderDetail);
    })
    .then((orderDetail) => {
        console.log("\n==========================================");
        console.log("✅✅✅ ORDER COMPLETED SUCCESSFULLY! ✅✅✅");
        console.log("==========================================");
        console.log("\n📋 Final Order Details:");
        console.log(`   Order ID: ${orderDetail.orderId}`);
        console.log(`   Customer: ${orderDetail.customer_name}`);
        console.log(`   Food Items: ${orderDetail.food.join(", ")}`);
        console.log(`   Total Cost: ₹${orderDetail.cost}`);
        console.log(`   Token Number: ${orderDetail.token}`);
        console.log(`   Status: ${orderDetail.status}`);
        console.log(`   Delivered At: ${orderDetail.deliveredAt}`);
        console.log("==========================================\n");
    })
    .catch((error) => {
        console.log("\n==========================================");
        console.log("🚫🚫🚫 ORDER FAILED! 🚫🚫🚫");
        console.log("==========================================");
        console.log("Error: " + error.message);
        console.log("==========================================\n");
    });



/* Output Example (with all steps successful):========== ZOMATO ORDER STARTED ==========
📦 Order ID: 123123
👤 Customer: Pankaj
📍 Location: Buxar
==========================================
## Complete Order Output:

========== ZOMATO ORDER STARTED ==========
📦 Order ID: 123123
👤 Customer: Pankaj
📍 Location: Buxar
==========================================

💳 1010 Payment is in progress...
✅ Payment is received and order placed successfully!

--- Moving to Food Preparation ---

🔍 Checking food availability...
👨‍🍳 Your food preparation started: Pizza, Biryani, Cake
⏳ Cooking in progress...
✅ Your order is now prepared!

--- Moving to Pickup Stage ---

🏍️ Finding delivery partner...
🚴 Delivery boy is on the way to Buxar
✅ I have picked up the order from restaurant!

--- Moving to Delivery Stage ---

🚚 Delivery boy is on the way to Buxar
🎉 Order delivered successfully to Pankaj!

==========================================
✅✅✅ ORDER COMPLETED SUCCESSFULLY! ✅✅✅
==========================================

📋 Final Order Details:
   Order ID: 123123
   Customer: Pankaj
   Food Items: Pizza, Biryani, Cake
   Total Cost: ₹1010
   Token Number: 10000144
   Status: delivered
   Delivered At: 10/31/2025, 3:45:30 PM
==========================================  */