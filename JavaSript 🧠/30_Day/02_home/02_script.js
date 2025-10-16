const addBtn = document.getElementById('addBtn');
const itemsContainer = document.getElementById('itemsContainer');
const totalItemsEl = document.getElementById('totalItems');
const clickCountEl = document.getElementById('clickCount');

let itemCount = 0;
let clickCount = 0;

// EVENT DELEGATION: Single event listener on the parent container
itemsContainer.addEventListener('click', function (e) {
    // Check if clicked element is an item
    if (e.target.classList.contains('item')) {
        clickCount++;
        clickCountEl.textContent = clickCount;

        e.target.classList.toggle('clicked');
        console.log(`Item clicked: ${e.target.querySelector('span').textContent}`);
        console.log(`Event delegation handled this! Target:`, e.target);
        console.log(`Current element (listener attached here):`, e.currentTarget);
    }

    // Check if clicked element is a delete button
    if (e.target.classList.contains('delete-btn')) {
        e.stopPropagation(); // Prevent item click event
        const item = e.target.closest('.item');
        const itemText = item.querySelector('span').textContent;

        item.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            item.remove();
            itemCount--;
            updateStats();
            console.log(`Item deleted: ${itemText}`);
        }, 300);
    }
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: translateX(20px);
                }
            }
        `;
document.head.appendChild(style);

// Add new item
addBtn.addEventListener('click', function () {
    // Remove empty state
    const emptyState = itemsContainer.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }

    itemCount++;
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
                <span>📦 Item #${itemCount}</span>
                <button class="delete-btn">Delete</button>
            `;

    itemsContainer.appendChild(item);
    updateStats();
    console.log(`New item added: Item #${itemCount}`);
    console.log('No new event listener needed - delegation handles it!');
});

function updateStats() {
    totalItemsEl.textContent = itemCount;

    if (itemCount === 0) {
        itemsContainer.innerHTML = '<div class="empty-state">Click "Add New Item" to get started!</div>';
    }
}

// Add initial items
for (let i = 1; i <= 3; i++) {
    addBtn.click();
}
clickCount = 0;
clickCountEl.textContent = 0;
