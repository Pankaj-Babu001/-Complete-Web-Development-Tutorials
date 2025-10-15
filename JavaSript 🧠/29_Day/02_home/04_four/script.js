
const consoleOutput = document.getElementById('consoleOutput');
const boxesContainer1 = document.getElementById('boxesContainer1');
const boxesContainer2 = document.getElementById('boxesContainer2');
const testBox1 = document.getElementById('testBox1');
const testBox2 = document.getElementById('testBox2');

// Logging function
function log(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const logLine = document.createElement('div');
    logLine.className = `log-line ${type}`;
    logLine.innerHTML = `<span class="timestamp">[${timestamp}]</span>${message}`;
    consoleOutput.insertBefore(logLine, consoleOutput.firstChild);

    // Console log with styling
    const colors = {
        reflow: '#ff6b6b',
        repaint: '#feca57',
        success: '#4caf50',
        info: '#667eea'
    };
    console.log(`%c${message}`, `color: ${colors[type] || '#667eea'}; font-weight: bold;`);

    // Keep only last 50 logs
    if (consoleOutput.children.length > 50) {
        consoleOutput.removeChild(consoleOutput.lastChild);
    }
}

// Initialize boxes for demo 1
function initBoxes() {
    if (boxesContainer1.children.length === 0) {
        for (let i = 0; i < 20; i++) {
            const box = document.createElement('div');
            box.className = 'small-box';
            box.textContent = i + 1;
            boxesContainer1.appendChild(box);
        }
    }
}

// BAD PRACTICE: Read-Write in loop (causes layout thrashing)
function badPractice() {
    log('❌ BAD: Reading offsetHeight in loop - causes MULTIPLE reflows!', 'reflow');
    initBoxes();

    const start = performance.now();
    const boxes = boxesContainer1.querySelectorAll('.small-box');

    // BAD: Each iteration causes a reflow!
    boxes.forEach(box => {
        const height = box.offsetHeight; // READ - forces reflow
        box.style.height = (height + 5) + 'px'; // WRITE
        const width = box.offsetWidth; // READ - forces reflow again!
        box.style.width = (width + 5) + 'px'; // WRITE
    });

    const duration = (performance.now() - start).toFixed(2);
    log(`⏱️ Completed in ${duration}ms (SLOW - ${boxes.length * 2} forced reflows!)`, 'reflow');
    console.warn(`Layout thrashing detected! ${boxes.length * 2} forced synchronous layouts.`);
}

// GOOD PRACTICE: Batch reads then writes
function goodPractice() {
    log('✅ GOOD: Batching reads and writes - causes SINGLE reflow!', 'success');
    initBoxes();

    const start = performance.now();
    const boxes = boxesContainer1.querySelectorAll('.small-box');

    // GOOD: Read all dimensions first
    const dimensions = Array.from(boxes).map(box => ({
        height: box.offsetHeight,
        width: box.offsetWidth
    }));

    // Then write all at once
    boxes.forEach((box, i) => {
        box.style.height = (dimensions[i].height + 5) + 'px';
        box.style.width = (dimensions[i].width + 5) + 'px';
    });

    const duration = (performance.now() - start).toFixed(2);
    log(`⏱️ Completed in ${duration}ms (FAST - only 1 reflow!)`, 'success');
    console.log(`%cOptimized! Single layout calculation for ${boxes.length} elements.`, 'color: #4caf50; font-weight: bold;');
}

// Change size (causes reflow)
function changeSize() {
    const currentSize = parseInt(testBox1.style.width || '150');
    const newSize = currentSize === 150 ? 200 : 150;
    testBox1.style.width = newSize + 'px';
    testBox1.style.height = newSize + 'px';
    log(`📏 Changed size to ${newSize}x${newSize}px - triggers REFLOW`, 'reflow');
}

// Change position (causes reflow)
function changePosition() {
    const currentMargin = parseInt(testBox1.style.marginTop || '20');
    const newMargin = currentMargin === 20 ? 60 : 20;
    testBox1.style.marginTop = newMargin + 'px';
    log(`📍 Changed margin to ${newMargin}px - triggers REFLOW`, 'reflow');
}

// Toggle display (causes reflow)
function toggleDisplay() {
    const isHidden = testBox1.style.display === 'none';
    testBox1.style.display = isHidden ? 'flex' : 'none';
    log(`👁️ ${isHidden ? 'Showed' : 'Hidden'} element - triggers REFLOW`, 'reflow');
}

// Change color (only repaint)
function changeColor() {
    const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    testBox2.style.background = randomColor;
    log(`🎨 Changed color - triggers REPAINT only (no reflow)`, 'repaint');
}

// Change opacity (only repaint)
function changeOpacity() {
    const currentOpacity = parseFloat(testBox2.style.opacity || '1');
    testBox2.style.opacity = currentOpacity === 1 ? '0.5' : '1';
    log(`👻 Changed opacity to ${testBox2.style.opacity} - triggers REPAINT only`, 'repaint');
}

// Change shadow (only repaint)
function changeShadow() {
    const hasShadow = testBox2.style.boxShadow;
    testBox2.style.boxShadow = hasShadow ? '' : '0 20px 60px rgba(102, 126, 234, 0.8)';
    log(`💫 ${hasShadow ? 'Removed' : 'Added'} shadow - triggers REPAINT only`, 'repaint');
}

// Change background (only repaint)
function changeBackground() {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    testBox2.style.background = randomGradient;
    log(`🌈 Changed background - triggers REPAINT only`, 'repaint');
}

// BAD: Add many elements one by one (slow)
function addManyBad() {
    log('❌ BAD: Adding 100 elements one by one - causes 100 reflows!', 'reflow');
    boxesContainer2.innerHTML = '';

    const start = performance.now();

    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        box.className = 'small-box';
        box.textContent = i + 1;
        boxesContainer2.appendChild(box); // Each append causes a reflow!
    }

    const duration = (performance.now() - start).toFixed(2);
    log(`⏱️ Completed in ${duration}ms (SLOW - 100 reflows!)`, 'reflow');
}

// GOOD: Use DocumentFragment (fast)
function addManyGood() {
    log('✅ GOOD: Using DocumentFragment - causes 1 reflow!', 'success');
    boxesContainer2.innerHTML = '';

    const start = performance.now();
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        box.className = 'small-box';
        box.textContent = i + 1;
        fragment.appendChild(box); // No reflow yet!
    }

    boxesContainer2.appendChild(fragment); // Single reflow!

    const duration = (performance.now() - start).toFixed(2);
    log(`⏱️ Completed in ${duration}ms (FAST - only 1 reflow!)`, 'success');
}

// Clear boxes
function clearBoxes() {
    boxesContainer2.innerHTML = '';
    log('🗑️ Cleared all elements', 'info');
}

// Initial console messages
console.log('%c🔄 Reflow/Repaint Logger Ready!', 'background: #667eea; color: white; padding: 10px; font-size: 18px; border-radius: 5px;');
console.log('%cOpen Performance tab (F12 → Performance → Record) to see actual reflow/repaint events!', 'color: #667eea; font-size: 14px;');
console.log('%c\nProperties that cause FORCED REFLOW when accessed:', 'color: #ff6b6b; font-weight: bold;');
console.log('offsetWidth, offsetHeight, offsetTop, offsetLeft, clientWidth, clientHeight, scrollWidth, scrollHeight, getComputedStyle(), getBoundingClientRect()');

log('🎯 Ready! Click buttons above and monitor Performance tab in DevTools', 'info');
