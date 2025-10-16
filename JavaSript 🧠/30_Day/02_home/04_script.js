
// State management
let totalClicks = 0;
let actionCount = 0;
let counter = 0;
let startTime = Date.now();

// Element references
const totalClicksEl = document.getElementById('totalClicks');
const actionCountEl = document.getElementById('actionCount');
const counterValueEl = document.getElementById('counterValue');
const sessionTimeEl = document.getElementById('sessionTime');
const counterDisplay = document.getElementById('counterDisplay');
const activityContainer = document.getElementById('activityContainer');
const themeSelector = document.getElementById('themeSelector');

// Counter controls
document.getElementById('incrementBtn').addEventListener('click', function (e) {
    counter++;
    updateCounter();
    logActivity('Incremented counter', '➕');
    addRipple(e);
});

document.getElementById('decrementBtn').addEventListener('click', function (e) {
    counter--;
    updateCounter();
    logActivity('Decremented counter', '➖');
    addRipple(e);
});

document.getElementById('resetBtn').addEventListener('click', function (e) {
    counter = 0;
    updateCounter();
    logActivity('Reset counter', '🔄');
    addRipple(e);
});

// Action buttons
document.getElementById('btn1').addEventListener('click', function (e) {
    logActivity('Launched rocket!', '🚀');
    showNotification('🚀 Rocket launched successfully!');
    addRipple(e);
});

document.getElementById('btn2').addEventListener('click', function (e) {
    logActivity('Approved action', '✅');
    showNotification('✅ Action approved!');
    addRipple(e);
});

document.getElementById('btn3').addEventListener('click', function (e) {
    logActivity('Liked content', '❤️');
    showNotification('❤️ Content liked!');
    addRipple(e);
});

document.getElementById('btn4').addEventListener('click', function (e) {
    logActivity('Fired up!', '🔥');
    showNotification('🔥 You\'re on fire!');
    addRipple(e);
});

document.getElementById('btn5').addEventListener('click', function (e) {
    logActivity('Got inspired', '💡');
    showNotification('💡 Inspiration gained!');
    addRipple(e);
});

document.getElementById('btn6').addEventListener('click', function (e) {
    document.body.style.filter = document.body.style.filter === 'invert(1)' ? '' : 'invert(1)';
    logActivity('Toggled dark mode', '🌙');
    addRipple(e);
});

// Theme selector with event delegation
themeSelector.addEventListener('click', function (e) {
    if (e.target.classList.contains('theme-btn')) {
        // Remove active class from all
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active to clicked
        e.target.classList.add('active');

        // Change body gradient
        const theme = e.target.getAttribute('data-theme');
        changeTheme(theme);
        logActivity(`Changed theme to ${theme}`, '🎨');
    }
});

// Clear feed
document.getElementById('clearFeedBtn').addEventListener('click', function () {
    activityContainer.innerHTML = '<div class="empty-feed">No activity yet. Click any button to get started!</div>';
    logActivity('Cleared activity feed', '🗑️');
});

// Helper functions
function updateCounter() {
    counterDisplay.textContent = counter;
    counterValueEl.textContent = counter;
    totalClicks++;
    actionCount++;
    updateStats();
}

function updateStats() {
    totalClicksEl.textContent = totalClicks;
    actionCountEl.textContent = actionCount;
}

function logActivity(text, icon) {
    // Remove empty message
    const emptyMsg = activityContainer.querySelector('.empty-feed');
    if (emptyMsg) emptyMsg.remove();

    const activity = document.createElement('div');
    activity.className = 'activity-item';
    activity.style.borderLeftColor = getRandomColor();

    const time = new Date().toLocaleTimeString();

    activity.innerHTML = `
                <div class="activity-icon">${icon}</div>
                <div class="activity-content">
                    <div class="activity-text">${text}</div>
                    <div class="activity-time">${time}</div>
                </div>
            `;

    activityContainer.insertBefore(activity, activityContainer.firstChild);

    // Limit to 20 items
    while (activityContainer.children.length > 20) {
        activityContainer.removeChild(activityContainer.lastChild);
    }

    totalClicks++;
    actionCount++;
    updateStats();
}

function showNotification(message) {
    // Simple notification system
    console.log(message);
}

function changeTheme(theme) {
    const themes = {
        purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        blue: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        green: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        orange: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    };
    document.body.style.background = themes[theme];
}

function getRandomColor() {
    const colors = ['#667eea', '#f5576c', '#4facfe', '#38ef7d', '#fee140', '#764ba2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function addRipple(e) {
    // Ripple effect is handled by CSS
}

// Session timer
setInterval(function () {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    sessionTimeEl.textContent = elapsed + 's';
}, 1000);

// Add mouseenter and mouseleave events to all action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        console.log('Mouse entered:', this.textContent.trim());
    });

    btn.addEventListener('mouseleave', function () {
        console.log('Mouse left:', this.textContent.trim());
    });
});

// Double click handler on counter
counterDisplay.addEventListener('dblclick', function () {
    counter = counter * 2;
    updateCounter();
    logActivity('Doubled counter value!', '✖️2️⃣');
});

// Log initial load
console.log('Dashboard loaded successfully!');
console.log('All event handlers registered.');
