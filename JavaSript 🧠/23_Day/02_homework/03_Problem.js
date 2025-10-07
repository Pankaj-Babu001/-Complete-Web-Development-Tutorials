console.log("\n3️⃣ Shallow vs Deep Copy:");

// Shallow copy using spread operator
const shallowCopy = { ...student };
shallowCopy.name = "Bob Smith";
shallowCopy.courses.push("Biology"); // This affects original!
shallowCopy.address.city = "New York"; // This affects original!

console.log("Original student courses:", student.courses);
console.log("Shallow copy courses:", shallowCopy.courses);
console.log("Original address city:", student.address.city);
console.log("Shallow copy address city:", shallowCopy.address.city);

// Deep copy using JSON methods (for simple objects)
const deepCopy = JSON.parse(JSON.stringify(student));
deepCopy.name = "Carol Davis";
deepCopy.courses.push("Chemistry"); // This does NOT affect original
deepCopy.address.city = "Chicago"; // This does NOT affect original

console.log("\nAfter deep copy modifications:");
console.log("Original student courses:", student.courses);
console.log("Deep copy courses:", deepCopy.courses);
console.log("Original address city:", student.address.city);
console.log("Deep copy address city:", deepCopy.address.city);