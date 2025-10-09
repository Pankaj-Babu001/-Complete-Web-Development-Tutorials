// ====================================================================
// 🔹 1️⃣ Function That Returns Another Function (Closure Behavior)
// ====================================================================

function greetPerson(name) {
    return function (message) {
        console.log(`${message}, ${name}!`);
    };
}

// ✅ Testing closure
const greetPankaj = greetPerson("Pankaj");
greetPankaj("Radhe Radhe"); // Output: Radhe Radhe, Pankaj!

/*
🧠 Explanation:
The inner function remembers 'name' from its parent even after
'greetPerson()' finishes — that memory is called a closure.
*/