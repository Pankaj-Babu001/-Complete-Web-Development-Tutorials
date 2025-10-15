
const colorBox = document.getElementById('colorBox');
const currentClassesSpan = document.getElementById('currentClasses');

// Toggle body background classes
function toggleBodyClass(className) {
    // Remove all other mode classes first
    document.body.classList.remove('dark-mode', 'ocean-mode', 'sunset-mode', 'forest-mode');

    // Toggle the selected class
    document.body.classList.toggle(className);
}

// Reset body to default
function resetBody() {
    document.body.classList.remove('dark-mode', 'ocean-mode', 'sunset-mode', 'forest-mode');
}

// Toggle color box classes
function toggleBoxClass(className) {
    // Toggle the class
    colorBox.classList.toggle(className);

    // Update the display of current classes
    updateCurrentClasses();

    // Update text content
    if (colorBox.classList.length > 1) {
        const activeClass = Array.from(colorBox.classList).filter(c => c !== 'color-box')[0];
        colorBox.textContent = activeClass ? activeClass.toUpperCase() : 'Click buttons!';
    } else {
        colorBox.textContent = 'Click buttons!';
    }
}

// Update the display of current classes
function updateCurrentClasses() {
    const classes = Array.from(colorBox.classList).filter(c => c !== 'color-box');
    currentClassesSpan.textContent = classes.length > 0 ? classes.join(', ') : 'none';
}

// Demonstration: Multiple toggles on the same element
function demonstrateMultipleToggles() {
    console.log('=== classList.toggle() Demo ===');
    console.log('Initial classes:', colorBox.className);

    colorBox.classList.toggle('bg-red');
    console.log('After toggle bg-red:', colorBox.className);

    colorBox.classList.toggle('bg-blue');
    console.log('After toggle bg-blue:', colorBox.className);

    colorBox.classList.toggle('bg-red');
    console.log('After toggle bg-red again:', colorBox.className);

    updateCurrentClasses();
}

// Log toggle events to console
console.log('%c classList.toggle() Demo Ready! ', 'background: #667eea; color: white; padding: 5px 10px; border-radius: 5px;');
console.log('Try clicking the buttons and check the console for class changes!');
