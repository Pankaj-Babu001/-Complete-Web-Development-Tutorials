// Base calculator operations
const mathOperations = {
    multiply(factor) {
        return this.value * factor;
    },
    add(number) {
        return this.value + number;
    },
    power(exponent) {
        return Math.pow(this.value, exponent);
    }
};

// Different data objects
const dataSets = {
    setA: { value: 10 },
    setB: { value: 25 },
    setC: { value: 100 }
};

// Using call()
console.log("Using call():");
console.log(mathOperations.multiply.call(dataSets.setA, 3)); // 30
console.log(mathOperations.add.call(dataSets.setB, 15));     // 40

// Using apply()
console.log("Using apply():");
console.log(mathOperations.power.apply(dataSets.setC, [2])); // 10000
console.log(mathOperations.multiply.apply(dataSets.setA, [5])); // 50

// Using bind() - creating reusable functions
console.log("Using bind():");
const boundMultiply = mathOperations.multiply.bind(dataSets.setB);
console.log(boundMultiply(2)); // 50
console.log(boundMultiply(4)); // 100

const boundPower = mathOperations.power.bind(dataSets.setC);
console.log(boundPower(3)); // 1000000