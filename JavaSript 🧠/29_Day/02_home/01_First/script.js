// CRUD Operations for To-Do List

let todos = [];
let currentEditId = null;

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// CREATE: Add new task
function createTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    if (currentEditId !== null) {
        // UPDATE: If editing, update existing task
        updateTask(currentEditId, taskText);
        currentEditId = null;
        addBtn.textContent = 'Add';
    } else {
        // CREATE: Add new task
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        todos.push(task);
    }

    taskInput.value = '';
    renderTasks();
}

// READ: Render all tasks
function renderTasks() {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
        return;
    }

    todos.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        li.innerHTML = `
                    <div class="todo-content">
                        <span class="todo-text ${task.completed ? 'completed' : ''}">${task.text}</span>
                    </div>
                    <div class="btn-group">
                        <button class="complete-btn" onclick="toggleComplete(${task.id})">
                            ${task.completed ? '↩️' : '✓'}
                        </button>
                        <button class="edit-btn" onclick="editTask(${task.id})">✏️</button>
                        <button class="delete-btn" onclick="deleteTask(${task.id})">🗑️</button>
                    </div>
                `;

        todoList.appendChild(li);
    });
}

// UPDATE: Edit task
function editTask(id) {
    const task = todos.find(t => t.id === id);
    if (task) {
        taskInput.value = task.text;
        taskInput.focus();
        currentEditId = id;
        addBtn.textContent = 'Update';
    }
}

function updateTask(id, newText) {
    const task = todos.find(t => t.id === id);
    if (task) {
        task.text = newText;
    }
}

// Toggle complete status
function toggleComplete(id) {
    const task = todos.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// DELETE: Remove task
function deleteTask(id) {
    todos = todos.filter(t => t.id !== id);
    renderTasks();
}

// Event listeners
addBtn.addEventListener('click', createTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
});

// Initial render
renderTasks();