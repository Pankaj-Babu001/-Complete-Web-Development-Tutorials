// Food Delivery System using Promises (Much Cleaner!)

console.log("🍕 Starting Food Delivery Order...\n");

// Step 1: Validate Order
function validateOrder(orderDetails) {
  return new Promise((resolve, reject) => {
    console.log("1️⃣ Validating order...");
    setTimeout(() => {
      if (orderDetails.items && orderDetails.items.length > 0) {
        console.log("✅ Order validated successfully");
        resolve(orderDetails);
      } else {
        reject("❌ Order validation failed: No items in cart");
      }
    }, 1000);
  });
}

// Step 2: Process Payment
function processPayment(orderDetails) {
  return new Promise((resolve, reject) => {
    console.log("2️⃣ Processing payment...");
    setTimeout(() => {
      if (orderDetails.amount > 0) {
        console.log("✅ Payment processed: $" + orderDetails.amount);
        resolve({ ...orderDetails, paymentStatus: "paid" });
      } else {
        reject("❌ Payment failed: Invalid amount");
      }
    }, 1500);
  });
}

// Step 3: Prepare Food
function prepareFood(orderDetails) {
  return new Promise((resolve) => {
    console.log("3️⃣ Restaurant preparing your food...");
    setTimeout(() => {
      console.log("✅ Food prepared and packed");
      resolve({ ...orderDetails, foodReady: true });
    }, 2000);
  });
}

// Step 4: Assign Delivery Partner
function assignDeliveryPartner(orderDetails) {
  return new Promise((resolve) => {
    console.log("4️⃣ Assigning delivery partner...");
    setTimeout(() => {
      const partner = "Pankaj (★ 4.8)";
      console.log(`✅ Delivery partner assigned: ${partner}`);
      resolve({ ...orderDetails, deliveryPartner: partner });
    }, 1000);
  });
}

// Step 5: Deliver Food
function deliverFood(orderDetails) {
  return new Promise((resolve) => {
    console.log("5️⃣ Delivering your food...");
    setTimeout(() => {
      console.log("✅ Food delivered successfully! 🎉");
      resolve({ ...orderDetails, delivered: true });
    }, 2500);
  });
}

// PROMISE CHAIN - Clean and readable!
const myOrder = {
  items: ["Pizza", "Garlic Bread", "Coke"],
  amount: 25.50,
  address: "123 Main St"
};

validateOrder(myOrder)
  .then(validatedOrder => processPayment(validatedOrder))
  .then(paidOrder => prepareFood(paidOrder))
  .then(preparedOrder => assignDeliveryPartner(preparedOrder))
  .then(assignedOrder => deliverFood(assignedOrder))
  .then(finalOrder => {
    console.log("\n🎊 Order Complete!");
    console.log("Final Order Details:", finalOrder);
  })
  .catch(error => {
    console.error("\n❌ Order Failed:", error);
  });

// BONUS: Using async/await (even cleaner!)
console.log("\n\n--- Using Async/Await ---\n");

async function completeOrder(order) {
  try {
    const validated = await validateOrder(order);
    const paid = await processPayment(validated);
    const prepared = await prepareFood(paid);
    const assigned = await assignDeliveryPartner(prepared);
    const delivered = await deliverFood(assigned);
    
    console.log("\n🎊 Order Complete!");
    console.log("Final Order Details:", delivered);
  } catch (error) {
    console.error("\n❌ Order Failed:", error);
  }
}

// Uncomment to test async/await version:
completeOrder(myOrder);