
// STRICT (===) vs LOOSE (==) EQUALITY
console.log("\n--- Strict (===) vs Loose (==) Equality ---");
console.log("5 == '5':", 5 == '5', "← Loose: converts types");
console.log("5 === '5':", 5 === '5', "← Strict: checks type AND value");

console.log("\ntrue == 1:", true == 1, "← Loose: true becomes 1");
console.log("true === 1:", true === 1, "← Strict: different types");

console.log("\nnull == undefined:", null == undefined, "← Special case");
console.log("null === undefined:", null === undefined, "← Different types");

console.log("\n0 == false:", 0 == false, "← Loose: both falsy");
console.log("0 === false:", 0 === false, "← Strict: different types");

console.log("\n💡 Best Practice: Always use === and !==\n");