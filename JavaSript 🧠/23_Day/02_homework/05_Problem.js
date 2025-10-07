// Define the student object that will be used across files
const student = {
    name: "Saroj Kumar",
    age: 20,
    grade: "A",
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        street: "Magdh University",
        city: "Patna",
        zipCode: "800001"
    },
    getInfo() {
        return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
};

// Make it available globally or export it
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { student };
} else {
    window.student = student;
}

console.table(student);