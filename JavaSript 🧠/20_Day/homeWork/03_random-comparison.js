// Compare outputs of Math.random() vs crypto.getRandomValues()

function generateMathRandom(count = 10) {
    console.log("Math.random() samples:");
    const results = [];
    for (let i = 0; i < count; i++) {
        const random = Math.random();
        results.push(random);
        console.log(`  ${i + 1}: ${random}`);
    }
    return results;
}

function generateCryptoRandom(count = 10) {
    console.log("\ncrypto.getRandomValues() samples:");
    const array = new Uint32Array(count);
    crypto.getRandomValues(array);
    
    const results = [];
    array.forEach((value, index) => {
        const normalized = value / (0xFFFFFFFF + 1); // Convert to 0-1 range
        results.push(normalized);
        console.log(`  ${index + 1}: ${normalized} (raw: ${value})`);
    });
    return results;
}

function analyzeDistribution(values, label) {
    const buckets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 10 buckets
    
    values.forEach(value => {
        const bucket = Math.floor(value * 10);
        if (bucket >= 0 && bucket < 10) {
            buckets[bucket]++;
        }
    });
    
    console.log(`\n${label} Distribution Analysis:`);
    buckets.forEach((count, index) => {
        const percentage = (count / values.length * 100).toFixed(1);
        console.log(`  ${(index / 10).toFixed(1)}-${((index + 1) / 10).toFixed(1)}: ${count} (${percentage}%)`);
    });
}

// Run comparison
console.log("=== Math.random() vs crypto.getRandomValues() Comparison ===");

const mathResults = generateMathRandom(1000); // Generate more for analysis
const cryptoResults = generateCryptoRandom(1000);

// Analyze distributions
analyzeDistribution(mathResults, "Math.random()");
analyzeDistribution(cryptoResults, "Crypto.getRandomValues()");

// Performance comparison
console.log("\n=== Performance Comparison ===");
const testCount = 10000;

console.time("Math.random()");
for (let i = 0; i < testCount; i++) {
    Math.random();
}
console.timeEnd("Math.random()");

console.time("crypto.getRandomValues()");
const largeArray = new Uint32Array(testCount);
crypto.getRandomValues(largeArray);
console.timeEnd("crypto.getRandomValues()");

// Security notes
console.log("\n=== Security Notes ===");
console.log("Math.random():");
console.log("  - Not cryptographically secure");
console.log("  - Predictable in some environments");
console.log("  - Suitable for non-security purposes");

console.log("\ncrypto.getRandomValues():");
console.log("  - Cryptographically secure");
console.log("  - Uses system entropy sources");
console.log("  - Suitable for security-sensitive applications");