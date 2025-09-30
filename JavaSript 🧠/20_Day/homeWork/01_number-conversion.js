// Convert numbers using .toFixed(2) and .toPrecision(4)

function convertNumbers() {
    const numbers = [123.4567, 89.123, 7.89123, 1234.567, 0.9876];
    
    console.log("Original Numbers:");
    numbers.forEach(num => console.log(num));
    
    console.log("\nUsing .toFixed(2):");
    numbers.forEach(num => {
        console.log(`${num} → ${num.toFixed(2)}`);
    });
    
    console.log("\nUsing .toPrecision(4):");
    numbers.forEach(num => {
        console.log(`${num} → ${num.toPrecision(4)}`);
    });
    
    // Additional examples with edge cases
    console.log("\n--- Edge Cases ---");
    const edgeCases = [0.0001234, 123456.789, 0.9999];
    
    edgeCases.forEach(num => {
        console.log(`${num}:`);
        console.log(`  toFixed(2): ${num.toFixed(2)}`);
        console.log(`  toPrecision(4): ${num.toPrecision(4)}`);
    });
}

// Demonstrate the difference
console.log("=== Number Conversion Examples ===");
convertNumbers();