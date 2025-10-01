// ========================================
// 3️⃣ Create Date Object for Birthday
// ========================================
console.log("=== Birthday Date Object ===\n");

// Example birthday: January 15, 2000
// Note: Month is 0-indexed (0 = January, 11 = December)
let birthday = new Date(2000, 0, 15);

console.log("📅 Full birthday date object:");
console.log(birthday);
console.log(birthday.toString());

console.log("\n📊 Extracted Components:");
console.log("Year:", birthday.getFullYear());
console.log("Month:", birthday.getMonth() + 1, "(+1 because months are 0-indexed)");
console.log("Month Name:", birthday.toLocaleString('default', { month: 'long' }));
console.log("Day:", birthday.getDate());
console.log("Day of Week:", birthday.toLocaleString('default', { weekday: 'long' }));

// Additional useful methods
console.log("\n🔍 Additional Date Information:");
console.log("Full Date (formatted):", birthday.toDateString());
console.log("Locale String:", birthday.toLocaleDateString());
console.log("ISO Format:", birthday.toISOString());

// Calculate age (bonus)
let today = new Date();
let age = today.getFullYear() - birthday.getFullYear();
let monthDiff = today.getMonth() - birthday.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
}
console.log("\n🎂 Age:", age, "years old");

// Create more birthday examples
console.log("\n--- More Examples ---");
let birthday2 = new Date(1995, 11, 25); // December 25, 1995
console.log("Christmas 1995 - Year:", birthday2.getFullYear(), "Month:", birthday2.getMonth() + 1, "Day:", birthday2.getDate());

let birthday3 = new Date(2005, 6, 4); // July 4, 2005
console.log("July 4, 2005 - Year:", birthday3.getFullYear(), "Month:", birthday3.getMonth() + 1, "Day:", birthday3.getDate());