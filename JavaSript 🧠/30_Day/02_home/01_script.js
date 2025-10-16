
const itemList = document.getElementById('itemList');
const logContainer = document.getElementById('logContainer');
const clearBtn = document.getElementById('clearBtn');
const listItems = itemList.getElementsByTagName('li');

// Add click event to each list item
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function (e) {
        const text = e.target.textContent;
        logClick(text);
    });
}

function logClick(text) {
    // Remove empty message if it exists
    const emptyMsg = logContainer.querySelector('.empty-log');
    if (emptyMsg) {
        emptyMsg.remove();
    }

    // Create log entry
    const logItem = document.createElement('div');
    logItem.className = 'log-item';
    const timestamp = new Date().toLocaleTimeString();
    logItem.textContent = `[${timestamp}] Clicked: ${text}`;

    // Add to top of log
    logContainer.insertBefore(logItem, logContainer.firstChild);

    // Also log to console
    console.log(`Clicked: ${text}`);
}

// Clear log functionality
clearBtn.addEventListener('click', function () {
    logContainer.innerHTML = '<div class="empty-log">Click an item to start logging...</div>';
});