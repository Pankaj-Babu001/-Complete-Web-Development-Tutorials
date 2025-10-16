
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const logSection = document.getElementById('logSection');
const clearBtn = document.getElementById('clearBtn');
const toggleSwitch = document.getElementById('toggleSwitch');
const toggleText = document.getElementById('toggleText');

let stopPropagation = false;

// Toggle switch
toggleSwitch.addEventListener('click', function () {
    stopPropagation = !stopPropagation;
    toggleSwitch.classList.toggle('active');
    toggleText.textContent = stopPropagation
        ? '🛑 Propagation Stopped (Click to Enable Bubbling)'
        : 'Bubbling Enabled (Click to Stop Propagation)';

    addLog(`System: Propagation ${stopPropagation ? 'STOPPED' : 'ENABLED'}`, 'stopped');
});

// Grandparent click handler
grandparent.addEventListener('click', function (e) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 👴 Grandparent clicked!`);
    console.log('Event phase:', e.eventPhase === 3 ? 'BUBBLING' : 'TARGET');

    addLog('👴 Grandparent event fired', 'grandparent');

    if (e.target === grandparent) {
        grandparent.style.background = 'rgba(255, 107, 107, 0.3)';
        setTimeout(() => {
            grandparent.style.background = 'rgba(255, 107, 107, 0.1)';
        }, 200);
    }
});

// Parent click handler
parent.addEventListener('click', function (e) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 👨 Parent clicked!`);
    console.log('Event phase:', e.eventPhase === 3 ? 'BUBBLING' : 'TARGET');

    addLog('👨 Parent event fired', 'parent');

    if (e.target === parent) {
        parent.style.background = 'rgba(78, 205, 196, 0.3)';
        setTimeout(() => {
            parent.style.background = 'rgba(78, 205, 196, 0.1)';
        }, 200);
    }

    // Stop propagation if toggle is on
    if (stopPropagation && e.target === parent) {
        e.stopPropagation();
        console.log('🛑 Propagation stopped at Parent!');
        addLog('🛑 Propagation stopped at Parent!', 'stopped');
    }
});

// Child click handler
child.addEventListener('click', function (e) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] 👶 Child clicked!`);
    console.log('Event phase:', e.eventPhase === 2 ? 'TARGET' : 'BUBBLING');

    addLog('👶 Child event fired (TARGET)', 'child');

    child.style.background = 'rgba(255, 217, 61, 0.3)';
    setTimeout(() => {
        child.style.background = 'rgba(255, 217, 61, 0.1)';
    }, 200);

    // Stop propagation if toggle is on
    if (stopPropagation) {
        e.stopPropagation();
        console.log('🛑 Propagation stopped at Child!');
        addLog('🛑 Propagation stopped at Child!', 'stopped');
    }
});

function addLog(message, type) {
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry log-${type}`;
    const timestamp = new Date().toLocaleTimeString();
    logEntry.textContent = `[${timestamp}] ${message}`;

    // Clear initial message
    if (logSection.children.length === 1 && logSection.children[0].textContent.includes('Click any box')) {
        logSection.innerHTML = '';
    }

    logSection.insertBefore(logEntry, logSection.firstChild);

    // Limit log entries
    while (logSection.children.length > 50) {
        logSection.removeChild(logSection.lastChild);
    }
}

// Clear log
clearBtn.addEventListener('click', function () {
    logSection.innerHTML = '<div style="color: #00ff00;">Log cleared. Click any box to start again...</div>';
});

// Initial log
addLog('System: Demo ready! Click any box to see bubbling.', 'stopped');
