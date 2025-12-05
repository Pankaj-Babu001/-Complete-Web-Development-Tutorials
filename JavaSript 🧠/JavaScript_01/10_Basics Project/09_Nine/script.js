const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const allTask = document.getElementById('allTask');
const emptyState = document.getElementById('emptyState');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const filterTabs = document.querySelectorAll('.tab');

// State
let tasks = [];
let currentFilter = 'all';

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
    updateStats();
});

// Form submit handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});

// Filter tabs handler
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        renderTasks();
    });
});

// Add new task
function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    const task = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    tasks.unshift(task);
    saveTasks();
    renderTasks();
    updateStats();
    form.reset();
    taskInput.focus();

    // Add success animation
    showNotification('Task added successfully! 🎉');
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
    updateStats();
    showNotification('Task deleted! 🗑️');
}

// Toggle task completion
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
    updateStats();
}

// Edit task
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const newText = prompt('Edit your task:', task.text);
    if (newText && newText.trim() !== '') {
        tasks = tasks.map(t => {
            if (t.id === id) {
                return { ...t, text: newText.trim() };
            }
            return t;
        });
        saveTasks();
        renderTasks();
        showNotification('Task updated! ✏️');
    }
}

// Render tasks
function renderTasks() {
    allTask.innerHTML = '';

    let filteredTasks = tasks;
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        if (currentFilter === 'completed') {
            emptyState.querySelector('h3').textContent = 'No completed tasks';
            emptyState.querySelector('p').textContent = 'Complete some tasks to see them here';
        } else if (currentFilter === 'active') {
            emptyState.querySelector('h3').textContent = 'No active tasks';
            emptyState.querySelector('p').textContent = 'All caught up! Great job! 🎉';
        } else {
            emptyState.querySelector('h3').textContent = 'No tasks yet!';
            emptyState.querySelector('p').textContent = 'Add your first task to get started on your productive day';
        }
    } else {
        emptyState.classList.add('hidden');
        filteredTasks.forEach(task => {
            const taskElement = createTaskElement(task);
            allTask.appendChild(taskElement);
        });
    }
}

// Create task element
function createTaskElement(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.id = task.id;

    const checkbox = document.createElement('div');
    checkbox.className = `task-checkbox ${task.completed ? 'checked' : ''}`;
    checkbox.onclick = () => toggleTask(task.id);

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    const taskText = document.createElement('div');
    taskText.className = `task-text ${task.completed ? 'completed' : ''}`;
    taskText.textContent = task.text;
    taskText.onclick = () => toggleTask(task.id);

    const taskTime = document.createElement('div');
    taskTime.className = 'task-time';
    taskTime.textContent = task.createdAt;

    taskContent.appendChild(taskText);
    taskContent.appendChild(taskTime);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'task-btn btn-edit';
    editBtn.innerHTML = '✏️';
    editBtn.onclick = (e) => {
        e.stopPropagation();
        editTask(task.id);
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-btn btn-delete';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this task?')) {
            deleteTask(task.id);
        }
    };

    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskActions);

    return taskItem;
}

// Update statistics
function updateStats() {
    totalTasksEl.textContent = tasks.length;
    completedTasksEl.textContent = tasks.filter(task => task.completed).length;
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6C5CE7, #A29BFE);
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(108, 92, 231, 0.3);
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        z-index: 1000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);