// ============================================
// 1️⃣ HOMEWORK 1: Promise-Based Food Delivery App
// ============================================

const orderDetail = {
    orderId: 123123,
    food: ["Pizza", "Biryani", "Cake"],
    cost: 420,
    customer_name: "Pankaj",
    customer_location: "Buxar",
    restaurant_location: "Buxar"
};

function placedOrder(orderDetail) {
    console.log(`💳 ${orderDetail.cost} Payment is in progress...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("✅ Payment received and order placed!");
                orderDetail.status = true;
                orderDetail.timestamp = new Date().toISOString();
                resolve(orderDetail);
            } else {
                reject("❌ Payment failed - Please try again");
            }
        }, 2000);
    });
}

function preparingOrder(orderDetail) {
    console.log(`👨‍🍳 Your food preparation started: ${orderDetail.food.join(", ")}`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                console.log("✅ Your order is now prepared!");
                orderDetail.token = Math.floor(Math.random() * 1000);
                orderDetail.preparationTime = "20 mins";
                resolve(orderDetail);
            } else {
                reject("❌ Food item is not available at restaurant");
            }
        }, 3000);
    });
}

function pickupOrder(orderDetail) {
    console.log(`🛵 Delivery boy is on the way to ${orderDetail.restaurant_location}...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                console.log("✅ Order picked up successfully!");
                orderDetail.received = true;
                orderDetail.deliveryBoy = "Rahul Kumar";
                resolve(orderDetail);
            } else {
                reject("❌ Delivery boy unable to reach restaurant");
            }
        }, 2500);
    });
}

function deliverOrder(orderDetail) {
    console.log(`🚗 On the way to deliver at ${orderDetail.customer_location}...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Order delivered successfully! 🎉");
            orderDetail.delivery = true;
            orderDetail.deliveredAt = new Date().toISOString();
            resolve(orderDetail);
        }, 3000);
    });
}

console.log("\n🍕 === STARTING FOOD DELIVERY PROCESS ===\n");

placedOrder(orderDetail)
    .then((orderDetail) => preparingOrder(orderDetail))
    .then((orderDetail) => pickupOrder(orderDetail))
    .then((orderDetail) => deliverOrder(orderDetail))
    .then((orderDetail) => {
        console.log("\n📦 === FINAL ORDER DETAILS ===");
        console.log(orderDetail);
        console.log("\n🎊 Thank you for ordering with us!");
    })
    .catch((error) => {
        console.error("\n🚨 ERROR OCCURRED:", error);
        console.log("💡 Don't worry! Your money will be refunded within 2-3 business days.");
    })
    .finally(() => {
        console.log("\n🧹 Cleanup completed - Order process ended\n");
        console.log("=".repeat(50));
    });
