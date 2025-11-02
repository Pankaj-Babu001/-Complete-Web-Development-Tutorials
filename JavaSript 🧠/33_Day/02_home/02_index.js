// Food Delivery System using Nested Callbacks (Callback Hell)

console.log("🍕 Starting Food Delivery Order...\n");

// Step 1: Validate Order
function validateOrder(orderDetails, callback) {
  console.log("1️⃣ Validating order...");
  setTimeout(() => {
    if (orderDetails.items && orderDetails.items.length > 0) {
      console.log("✅ Order validated successfully");
      callback(null, orderDetails);
    } else {
      callback("❌ Order validation failed: No items in cart");
    }
  }, 1000);
}

// Step 2: Process Payment
function processPayment(orderDetails, callback) {
  console.log("2️⃣ Processing payment...");
  setTimeout(() => {
    if (orderDetails.amount > 0) {
      console.log("✅ Payment processed: $" + orderDetails.amount);
      callback(null, { ...orderDetails, paymentStatus: "paid" });
    } else {
      callback("❌ Payment failed: Invalid amount");
    }
  }, 1500);
}

// Step 3: Prepare Food
function prepareFood(orderDetails, callback) {
  console.log("3️⃣ Restaurant preparing your food...");
  setTimeout(() => {
    console.log("✅ Food prepared and packed");
    callback(null, { ...orderDetails, foodReady: true });
  }, 2000);
}

// Step 4: Assign Delivery Partner
function assignDeliveryPartner(orderDetails, callback) {
  console.log("4️⃣ Assigning delivery partner...");
  setTimeout(() => {
    const partner = "Pankaj (★ 4.8)";
    console.log(`✅ Delivery partner assigned: ${partner}`);
    callback(null, { ...orderDetails, deliveryPartner: partner });
  }, 1000);
}

// Step 5: Deliver Food
function deliverFood(orderDetails, callback) {
  console.log("5️⃣ Delivering your food...");
  setTimeout(() => {
    console.log("✅ Food delivered successfully! 🎉");
    callback(null, { ...orderDetails, delivered: true });
  }, 2500);
}

// THE CALLBACK HELL - Nested callbacks
const myOrder = {
  items: ["Pizza", "Garlic Bread", "Coke"],
  amount: 25.50,
  address: "123 Main St"
};

validateOrder(myOrder, (err, validatedOrder) => {
  if (err) {
    console.error(err);
    return;
  }
  
  processPayment(validatedOrder, (err, paidOrder) => {
    if (err) {
      console.error(err);
      return;
    }
    
    prepareFood(paidOrder, (err, preparedOrder) => {
      if (err) {
        console.error(err);
        return;
      }
      
      assignDeliveryPartner(preparedOrder, (err, assignedOrder) => {
        if (err) {
          console.error(err);
          return;
        }
        
        deliverFood(assignedOrder, (err, finalOrder) => {
          if (err) {
            console.error(err);
            return;
          }
          
          console.log("\n🎊 Order Complete!");
          console.log("Final Order Details:", finalOrder);
        });
      });
    });
  });
});