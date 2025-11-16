/*
  final_script.js - Revised Version
  - Improved consistency in starting object creation.
  - Removed unnecessary 'retry' wrapper from the always-successful deliverOrder.
*/

/* -------------------------
   Helper: DOM Status Tracker (No changes needed)
   -------------------------*/
(function initStatusContainer() {
    if (typeof document === "undefined") return;

    if (!document.getElementById("promise-status")) {
        const container = document.createElement("div");
        container.id = "promise-status";
        container.style.fontFamily = "Arial, sans-serif";
        container.style.margin = "12px 0";
        container.style.padding = "10px";
        container.style.border = "1px solid #eee";
        container.style.borderRadius = "6px";
        container.style.background = "#fafafa";
        container.innerHTML = "<strong>Status Tracker</strong>";
        const list = document.createElement("div");
        list.id = "status-list";
        list.style.marginTop = "8px";
        container.appendChild(list);
        document.body.prepend(container);
    }
})();

function updateStatus(message, state = "info") {
    // state: info | success | error | warn
    if (typeof document === "undefined") {
        console.log(`[${state.toUpperCase()}] ${message}`);
        return;
    }

    const list = document.getElementById("status-list");
    if (!list) return console.log(message);

    const item = document.createElement("div");
    item.textContent = message;
    item.style.padding = "6px 8px";
    item.style.marginBottom = "6px";
    item.style.borderRadius = "4px";
    item.style.display = "inline-block";
    item.style.minWidth = "240px";

    switch (state) {
        case "success":
            item.style.background = "#e6ffed";
            item.style.color = "#056608";
            item.style.border = "1px solid #b7f0c0";
            break;
        case "error":
            item.style.background = "#fff1f0";
            item.style.color = "#8b0000";
            item.style.border = "1px solid #f7c6c6";
            break;
        case "warn":
            item.style.background = "#fff7e6";
            item.style.color = "#8a5a00";
            item.style.border = "1px solid #f0d7a8";
            break;
        default:
            item.style.background = "#eef6ff";
            item.style.color = "#03396b";
            item.style.border = "1px solid #d7eaff";
    }

    list.appendChild(item);
    item.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* -------------------------
   Order flow data (No changes needed)
   -------------------------*/
const orderDetail = {
    orderId: 123123,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi",
};

/* -------------------------
   Promise-based service steps (No functional changes needed)
   -------------------------*/
function placedOrder(order) {
    updateStatus(`[ID:${order.orderId}] ${order.cost} payment is in progress...`, "info");
    return new new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                order.status = true;
                updateStatus(`✅ [ID:${order.orderId}] Payment received and order placed (placedOrder)`, "success");
                resolve(order);
            } else {
                const err = `❌ [ID:${order.orderId}] Payment failed at placedOrder()`;
                updateStatus(err, "error");
                reject(err);
            }
        }, 1500);
    });
}

function preparingOrder(order) {
    updateStatus(`[ID:${order.orderId}] Preparing: ${order.food.join(", ")}`, "info");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                order.token = Math.floor(Math.random() * 900) + 100;
                updateStatus(`✅ [ID:${order.orderId}] Order prepared (preparingOrder)`, "success");
                resolve(order);
            } else {
                const err = `❌ [ID:${order.orderId}] Preparation failed at preparingOrder()`;
                updateStatus(err, "error");
                reject(err);
            }
        }, 1500);
    });
}

function packOrder(order) {
    updateStatus(`[ID:${order.orderId}] 📦 Packing order...`, "info");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.10) {
                updateStatus(`✅ [ID:${order.orderId}] Packing completed successfully (packOrder)`, "success");
                resolve(order);
            } else {
                const err = `❌ [ID:${order.orderId}] Packing failed at packOrder()`;
                updateStatus(err, "error");
                reject(err);
            }
        }, 1200);
    });
}

function pickupOrder(order) {
    updateStatus(`[ID:${order.orderId}] Delivery boy en route to ${order.restaurant_location}`, "info");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                order.received = true;
                updateStatus(`✅ [ID:${order.orderId}] Order picked up (pickupOrder)`, "success");
                resolve(order);
            } else {
                const err = `❌ [ID:${order.orderId}] Pickup failed at pickupOrder()`;
                updateStatus(err, "error");
                reject(err);
            }
        }, 1500);
    });
}

function deliverOrder(order) {
    updateStatus(`[ID:${order.orderId}] Delivering to ${order.customer_location}...`, "info");
    return new Promise((resolve) => { // Removed reject since it's reliable
        setTimeout(() => {
            order.delivery = true;
            updateStatus(`✅ [ID:${order.orderId}] Order delivered successfully (deliverOrder)`, "success");
            resolve(order);
        }, 1500);
    });
}

/* -------------------------
   retry helper (No changes needed)
   -------------------------*/
function retry(promiseFn, data, attempts = 1) {
    return promiseFn(data).catch((err) => {
        if (attempts > 0) {
            // Note: Data is passed as-is to the retried function, ensuring the
            // order state is maintained across retries.
            updateStatus(`[ID:${data.orderId}] 🔁 Retrying ${promiseFn.name}... attempts left: ${attempts}`, "warn");
            return retry(promiseFn, data, attempts - 1);
        }
        updateStatus(`[ID:${data.orderId}] ❌ Final failure at ${promiseFn.name}: ${err}`, "error");
        throw err;
    });
}

/* -------------------------
   Main ordering flow using async/await with retries
   (REVISION: Start with a clear clone, remove unnecessary retry() on deliverOrder)
   -------------------------*/
async function orderingWithRetries() {
    updateStatus("🟦 Starting ordering flow (with retries)...", "info");

    // Create the working order object once by deep cloning the detail object
    const workingOrder = JSON.parse(JSON.stringify(orderDetail));
    workingOrder.orderId = Math.floor(Math.random() * 1000000); // Give it a unique ID

    try {
        const step1 = await retry(placedOrder, workingOrder, 1);
        const step2 = await retry(preparingOrder, step1, 1);
        const step3 = await retry(packOrder, step2, 1);
        const step4 = await retry(pickupOrder, step3, 1);

        // deliverOrder has no random failure, so retry is not needed
        const final = await deliverOrder(step4);

        updateStatus(`🏁 FLOW COMPLETE: Order ${final.orderId}`, "success");
        console.log("Final Order Status:", final);
    } catch (err) {
        updateStatus("🚨 Ordering flow failed: " + err, "error");
        console.error("Ordering flow failed:", err);
    } finally {
        updateStatus("🧹 Cleanup done (finally)", "info");
    }
}

/* -------------------------
   Promise.all demo: two customers in parallel
   (REVISION: Use robust cloning for the two separate orders)
   -------------------------*/
function promiseAllDemo() {
    updateStatus("🔵 Running Promise.all demo (two customers)", "info");

    // Use deep cloning to ensure A and B are completely independent objects
    const orderA = JSON.parse(JSON.stringify(orderDetail));
    orderA.orderId = 201;
    const orderB = JSON.parse(JSON.stringify(orderDetail));
    orderB.orderId = 202;

    // Both orders start their placement simultaneously
    const pA = placedOrder(orderA);
    const pB = placedOrder(orderB);

    Promise.all([pA, pB])
        .then((results) => {
            updateStatus("✅ Both payments succeeded: " + results.map(r => r.orderId).join(", "), "success");
            console.log("Promise.all results:", results);
        })
        .catch((err) => {
            updateStatus("❌ Promise.all error (at least one failed): " + err, "error");
            console.error("Promise.all error:", err);
        });
}

/* -------------------------
   Helper: Attach buttons to the page for demo control (No changes needed)
   -------------------------*/
(function addDemoControls() {
    if (typeof document === "undefined") return;
    const controlsId = "order-controls";
    if (document.getElementById(controlsId)) return;

    const c = document.createElement("div");
    c.id = controlsId;
    c.style.margin = "12px 0";
    c.style.display = "flex";
    c.style.gap = "8px";

    const btn1 = document.createElement("button");
    btn1.textContent = "Start Ordering (with retries)";
    btn1.onclick = () => orderingWithRetries();

    const btn2 = document.createElement("button");
    btn2.textContent = "Promise.all Demo";
    btn2.onclick = () => promiseAllDemo();

    const btn3 = document.createElement("button");
    btn3.textContent = "Clear Status";
    btn3.onclick = () => {
        const list = document.getElementById("status-list");
        if (list) list.innerHTML = "";
    };

    c.append(btn1, btn2, btn3);
    const container = document.getElementById("promise-status") || document.body;
    container.appendChild(c);
})();

/* -------------------------
   Expose functions for console/manual use (No changes needed)
   -------------------------*/
window.demo = {
    orderingWithRetries,
    promiseAllDemo,
    placedOrder,
    preparingOrder,
    packOrder,
    pickupOrder,
    deliverOrder,
    retry,
};

// Optional: auto-start a demo when loaded (comment/uncomment as desired)
orderingWithRetries();

/* End of final_script.js */