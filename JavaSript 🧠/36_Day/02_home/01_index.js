// Using top-level await (only in ES modules)

// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const data = await response.json();
// console.log('Todo:', data.title);


// Using async function (works everywhere)
async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log('Todo:', data.title);
}

fetchTodo().catch(console.error);