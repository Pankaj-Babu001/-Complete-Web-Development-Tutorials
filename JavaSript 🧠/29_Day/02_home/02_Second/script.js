
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const removeLastBtn = document.getElementById('removeLastBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const dynamicList = document.getElementById('dynamicList');
const itemCount = document.getElementById('itemCount');

let items = [];

// Add item to the list
function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        alert('Please enter an item name!');
        return;
    }

    // Add to array
    items.push(itemText);

    // Create list item element
    const li = document.createElement('li');
    li.className = 'list-item';

    li.innerHTML = `
                <div class="item-content">
                    <span class="item-number">#${items.length}</span>
                    <span>${itemText}</span>
                </div>
                <button class="remove-btn" onclick="removeItem(this)">Remove</button>
            `;

    // Append to list
    dynamicList.appendChild(li);

    // Clear input
    itemInput.value = '';
    itemInput.focus();

    // Update count
    updateCount();
}

// Remove specific item
function removeItem(btn) {
    const li = btn.parentElement;
    li.classList.add('removing');

    setTimeout(() => {
        dynamicList.removeChild(li);
        items.pop(); // Remove from array
        updateCount();
        renumberItems();
    }, 300);
}

// Remove last item
function removeLast() {
    if (items.length === 0) {
        alert('No items to remove!');
        return;
    }

    const lastItem = dynamicList.lastElementChild;
    lastItem.classList.add('removing');

    setTimeout(() => {
        dynamicList.removeChild(lastItem);
        items.pop();
        updateCount();
    }, 300);
}

// Clear all items
function clearAll() {
    if (items.length === 0) {
        return;
    }

    if (confirm(`Are you sure you want to remove all ${items.length} items?`)) {
        // Add removing animation to all items
        const allItems = dynamicList.querySelectorAll('.list-item');
        allItems.forEach(item => item.classList.add('removing'));

        setTimeout(() => {
            dynamicList.innerHTML = '';
            items = [];
            updateCount();
            showEmptyState();
        }, 300);
    }
}

// Renumber items after removal
function renumberItems() {
    const allItems = dynamicList.querySelectorAll('.list-item');
    allItems.forEach((item, index) => {
        const numberSpan = item.querySelector('.item-number');
        numberSpan.textContent = `#${index + 1}`;
    });
}

// Update item count
function updateCount() {
    itemCount.textContent = items.length;

    if (items.length === 0) {
        showEmptyState();
    }
}

// Show empty state
function showEmptyState() {
    if (items.length === 0) {
        dynamicList.innerHTML = '<div class="empty-state">📋 No items yet. Add some above!</div>';
    }
}

// Event listeners
addBtn.addEventListener('click', addItem);
removeLastBtn.addEventListener('click', removeLast);
clearAllBtn.addEventListener('click', clearAll);

itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});

// Initial state
showEmptyState();
updateCount();