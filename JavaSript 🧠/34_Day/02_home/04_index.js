// ============================================
// 4️⃣ HOMEWORK 4: Promises vs Callbacks Comparison
// ============================================

setTimeout(() => {
    console.log("\n\n📊 === PROMISES VS CALLBACKS COMPARISON ===\n");
    
    console.log("🔴 CALLBACKS - The Old Way:");
    console.log("❌ Callback Hell (Pyramid of Doom)");
    console.log("❌ Difficult error handling");
    console.log("❌ Poor readability");
    console.log("❌ Hard to maintain");
    console.log("❌ No built-in composition\n");
    
    console.log("🟢 PROMISES - The Modern Way:");
    console.log("✅ Clean, flat chaining");
    console.log("✅ Centralized error handling with .catch()");
    console.log("✅ Excellent readability");
    console.log("✅ Easy to maintain and test");
    console.log("✅ Built-in utilities (all, race, allSettled, any)");
    console.log("✅ Foundation for async/await\n");
    
    console.log("🎯 CONCLUSION:");
    console.log("Promises revolutionized async JavaScript by making code:");
    console.log("• More maintainable");
    console.log("• Easier to reason about");
    console.log("• Better at handling errors");
    console.log("• Ready for modern async/await syntax\n");
    
    console.log("=".repeat(50));
    console.log("\n✨ Radhe Radhe 😊🙏");
    console.log("🎓 Day 34 Homework Completed Successfully! 🎉\n");
}, 25000);


// ============================================
// 📝 BONUS: JSON vs JavaScript Object Demo
// ============================================

console.log("\n\n📦 === BONUS: JSON vs JS Object ===\n");

// JavaScript Object
const jsObject = {
    name: "Rohit",
    age: 30,
    address: "Dwarka",
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true
};

console.log("🟦 JavaScript Object:");
console.log(jsObject);
console.log("Type:", typeof jsObject);

// Convert to JSON
const jsonString = JSON.stringify(jsObject);
console.log("\n📄 JSON String:");
console.log(jsonString);
console.log("Type:", typeof jsonString);

// Convert back to JS Object
const parsedObject = JSON.parse(jsonString);
console.log("\n🔄 Parsed back to JS Object:");
console.log(parsedObject);
console.log("Type:", typeof parsedObject);

console.log("\n💡 Key Differences:");
console.log("• JSON is a text format (string)");
console.log("• JS Object is a data structure");
console.log("• JSON keys must be in double quotes");
console.log("• JSON used for data transfer between client-server");
console.log("\n" + "=".repeat(50));