console.log("\n4️⃣ Destructuring and Renaming:");

// Basic destructuring
const { name, age, grade } = student;
console.log("Basic destructuring:", { name, age, grade });

// Destructuring with renaming
const { name: studentName, age: studentAge, grade: studentGrade } = student;
console.log("Renamed properties:", { studentName, studentAge, studentGrade });

// Nested destructuring
const { address: { city, street } } = student;
console.log("Nested destructuring - City:", city, "Street:", street);

// Destructuring with rest operator
const { name: fullName, ...studentInfo } = student;
console.log("Full name:", fullName);
console.log("Rest of student info:", studentInfo);