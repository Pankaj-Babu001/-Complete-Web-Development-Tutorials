// ====================================================================
// 🔹 3️⃣ Higher-Order Function (Filters Even Numbers)
// ====================================================================

function filterArray(arr, filterFn) {
    return arr.filter(filterFn);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4, 6]

/*
💡 Explanation:
filterArray() takes another function as input (filterFn),
making it a Higher-Order Function.
*/