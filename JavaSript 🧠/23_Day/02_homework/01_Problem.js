// Create student object with properties and methods
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
    // Method
    getInfo() {
        return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    },
    // Another method
    addCourse(course) {
        this.courses.push(course);
    }
};

console.log("Student object created:");
console.log(student.getInfo());