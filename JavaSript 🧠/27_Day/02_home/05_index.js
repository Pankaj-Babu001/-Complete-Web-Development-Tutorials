// 🎓 Create a Map storing student objects as keys and grades as values

const student1 = { name: "Ravi", roll: 101 };
const student2 = { name: "Sneha", roll: 102 };
const student3 = { name: "Amit", roll: 103 };

const grades = new Map();
grades.set(student1, "A");
grades.set(student2, "B+");
grades.set(student3, "A+");

// Print details
for (let [student, grade] of grades) {
    console.log(`${student.name} (Roll: ${student.roll}) => Grade: ${grade}`);
}
