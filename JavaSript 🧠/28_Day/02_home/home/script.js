// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Selecting <p> tags with old and modern methods
    document.getElementById('select-paragraphs').addEventListener('click', function() {
        // Old method
        const paragraphsOld = document.getElementsByTagName('p');
        
        // Modern method
        const paragraphsModern = document.querySelectorAll('p');
        
        const resultElement = document.getElementById('selection-result');
        resultElement.innerHTML = `
            Found <strong>${paragraphsOld.length}</strong> paragraphs using getElementsByTagName() (old method)<br>
            Found <strong>${paragraphsModern.length}</strong> paragraphs using querySelectorAll() (modern method)
        `;
    });
    
    // 2. To-Do List functionality
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    
    // Add new todo item
    function addTodo() {
        const taskText = todoInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        // Add event listener to mark as completed
        todoItem.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON') {
                this.classList.toggle('completed');
            }
        });
        
        // Add event listener to delete button
        const deleteButton = todoItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the parent click event
            todoItem.remove();
        });
        
        todoList.appendChild(todoItem);
        todoInput.value = '';
        todoInput.focus();
    }
    
    addTodoButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    // 3. classList.toggle() demonstration
    const toggleBox = document.getElementById('toggle-box');
    toggleBox.addEventListener('click', function() {
        this.classList.toggle('active');
    });
    
    // 4. DocumentFragment demonstration
    document.getElementById('generate-items').addEventListener('click', generateItems);
    
    function generateItems() {
        const fragment = document.createDocumentFragment();
        const list = document.getElementById('fragment-list');
        
        // Clear existing items
        list.innerHTML = '';
        
        // Create 100 list items and add to fragment
        for (let i = 1; i <= 100; i++) {
            const item = document.createElement('div');
            item.className = 'fragment-item';
            item.textContent = `Item ${i}`;
            fragment.appendChild(item);
        }
        
        // Append all items at once
        list.appendChild(fragment);
    }
    
    // Generate initial items
    generateItems();
});