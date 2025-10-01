// ========================================
// 4️⃣ Compare same Date in IST vs UTC
// ========================================
console.log("=== IST vs UTC Time Comparison ===\n");

// Create the same Date object
let now = new Date();

console.log("🌐 Same Date Object - Different Representations:\n");

// ========== IST (India Standard Time) ==========
console.log("📍 IST (India Standard Time - UTC+5:30):");
console.log("toString():", now.toString());
console.log("toLocaleString():", now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
console.log("Custom format:", now.toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long'
}));

// ========== UTC (Universal Time) ==========
console.log("\n🌍 UTC (Coordinated Universal Time):");
console.log("toUTCString():", now.toUTCString());
console.log("toISOString():", now.toISOString());

// ========== Detailed Comparison ==========
console.log("\n📊 Detailed Time Components:");
console.log("┌─────────────────┬──────────┬──────────┐");
console.log("│   Component     │   IST    │   UTC    │");
console.log("├─────────────────┼──────────┼──────────┤");
console.log(`│ Year            │  ${now.getFullYear()}    │  ${now.getUTCFullYear()}    │`);
console.log(`│ Month           │  ${String(now.getMonth() + 1).padStart(2, '0')}      │  ${String(now.getUTCMonth() + 1).padStart(2, '0')}      │`);
console.log(`│ Date            │  ${String(now.getDate()).padStart(2, '0')}      │  ${String(now.getUTCDate()).padStart(2, '0')}      │`);
console.log(`│ Hours           │  ${String(now.getHours()).padStart(2, '0')}      │  ${String(now.getUTCHours()).padStart(2, '0')}      │`);
console.log(`│ Minutes         │  ${String(now.getMinutes()).padStart(2, '0')}      │  ${String(now.getUTCMinutes()).padStart(2, '0')}      │`);
console.log(`│ Seconds         │  ${String(now.getSeconds()).padStart(2, '0')}      │  ${String(now.getUTCSeconds()).padStart(2, '0')}      │`);
console.log("└─────────────────┴──────────┴──────────┘");

// ========== Time Difference ==========
console.log("\n⏰ Time Difference Analysis:");
console.log("IST Offset: UTC +5:30 (5 hours 30 minutes ahead)");
let hourDiff = now.getHours() - now.getUTCHours();
console.log("Current hour difference:", hourDiff, "hours");
console.log("Timezone offset (minutes):", -now.getTimezoneOffset(), "minutes");
console.log("Timezone offset (hours):", -now.getTimezoneOffset() / 60, "hours");

// ========== Key Insight ==========
console.log("\n💡 Key Insight:");
console.log("The same Date object represents the SAME moment in time,");
console.log("but displayed in different timezones!");
console.log("Milliseconds since epoch:", now.getTime());