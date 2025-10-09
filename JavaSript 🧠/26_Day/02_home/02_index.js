// ====================================================================
// 🔹 2️⃣ Counter App Without Global Variables
// ====================================================================

function createCounter() {
    let count = 0; // private variable, inaccessible outside

    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset to 0");
        },
        getCount: function () {
            return count;
        },
    };
}

// ✅ Testing
const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
console.log("Current Count:", counter.getCount()); // 2
counter.reset(); // Counter reset to 0