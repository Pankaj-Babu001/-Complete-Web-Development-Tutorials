
// ============================================
// 3️⃣ HOMEWORK 3: Promise.all() - Parallel Execution
// ============================================

console.log("\n\n🔄 === PROMISE.ALL() DEMO ===\n");

// Simulating multiple restaurant orders in parallel
function fetchRestaurantMenu(restaurantName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                restaurant: restaurantName,
                items: Math.floor(Math.random() * 50) + 20,
                available: true
            });
        }, delay);
    });
}

function checkDeliveryPartners(area) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                area: area,
                partnersAvailable: Math.floor(Math.random() * 10) + 5,
                avgDeliveryTime: "30 mins"
            });
        }, 1500);
    });
}

function validateCoupon(couponCode) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (couponCode === "SAVE20") {
                resolve({
                    coupon: couponCode,
                    discount: "20%",
                    valid: true
                });
            } else {
                reject("Invalid coupon code");
            }
        }, 1000);
    });
}

console.log("🔍 Fetching multiple data in parallel...\n");

Promise.all([
    fetchRestaurantMenu("Pizza Hut", 2000),
    fetchRestaurantMenu("Domino's", 1500),
    fetchRestaurantMenu("KFC", 1800),
    checkDeliveryPartners("Buxar"),
    validateCoupon("SAVE20")
])
.then((results) => {
    console.log("✅ All promises resolved successfully!\n");
    console.log("📊 Results:", results);
    console.log("\n💡 All data fetched in parallel - fastest execution!");
})
.catch((error) => {
    console.error("❌ One of the promises failed:", error);
})
.finally(() => {
    console.log("\n🏁 Promise.all() demo completed\n");
    console.log("=".repeat(50));
});


// ============================================
// 🏁 PROMISE.RACE() DEMO
// ============================================

setTimeout(() => {
    console.log("\n\n🏃 === PROMISE.RACE() DEMO ===\n");
    console.log("🎯 First restaurant to respond wins!\n");

    function restaurantResponse(name, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`${name} is ready to take your order!`);
            }, delay);
        });
    }

    Promise.race([
        restaurantResponse("🍕 Pizza Hut", 2000),
        restaurantResponse("🍗 KFC", 1500),
        restaurantResponse("🍔 McDonald's", 2500)
    ])
    .then((winner) => {
        console.log("🏆 Winner:", winner);
        console.log("💡 Promise.race() returns the first resolved promise!\n");
    })
    .catch((error) => {
        console.error("❌ Error:", error);
    });
}, 15000);


// ============================================
// 🎯 PROMISE.ALLSETTLED() DEMO
// ============================================

setTimeout(() => {
    console.log("\n\n🎲 === PROMISE.ALLSETTLED() DEMO ===\n");
    console.log("🔍 Checking all restaurants - even if some fail\n");

    function checkRestaurant(name, willFail = false) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (willFail) {
                    reject(`${name} is closed`);
                } else {
                    resolve(`${name} is open`);
                }
            }, 1000);
        });
    }

    Promise.allSettled([
        checkRestaurant("🍕 Pizza Hut", false),
        checkRestaurant("🍗 KFC", true),
        checkRestaurant("🍔 McDonald's", false),
        checkRestaurant("🌮 Taco Bell", true)
    ])
    .then((results) => {
        console.log("📊 All Results (Success + Failures):");
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`✅ ${index + 1}. ${result.value}`);
            } else {
                console.log(`❌ ${index + 1}. ${result.reason}`);
            }
        });
        console.log("\n💡 Promise.allSettled() waits for all promises regardless of success/failure!\n");
    });
}, 20000);
