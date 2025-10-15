// 🧠 Custom implementation of map() and filter()

// Custom map function
function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Custom filter function
function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// 🎯 Example usage
const numbers = [1, 2, 3, 4, 5];

const doubled = myMap(numbers, (num) => num * 2);
console.log("Custom Map (doubled):", doubled);

const evens = myFilter(numbers, (num) => num % 2 === 0);
console.log("Custom Filter (evens):", evens);
