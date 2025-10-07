console.log("\n2️⃣ Looping through keys:");

// Using for...in loop
console.log("Using for...in:");
for (let key in student) {
    if (Object.hasOwn(student, key)) { // More modern alternative to hasOwnProperty
        console.log(`Key: ${key}, Value: ${student[key]}`);
    }
}

// Using Object.keys()
console.log("\nUsing Object.keys():");
Object.keys(student).forEach(key => {
    console.log(`Key: ${key}, Value: ${student[key]}`);
});

// Additional modern approach - Object.entries()
console.log("\nUsing Object.entries():");
Object.entries(student).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
});