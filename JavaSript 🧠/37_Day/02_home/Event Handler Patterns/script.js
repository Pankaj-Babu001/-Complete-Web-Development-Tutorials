// Custom console to display output in the HTML
const consoleOutput = document.getElementById('console');
const originalConsoleLog = console.log;

console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');

    const logEntry = document.createElement('div');
    logEntry.textContent = `> ${message}`;
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
};

// Approach 1: Using bind()
class ToggleSwitchBind {
    constructor(buttonId, statusId) {
        this.isOn = false;
        this.button = document.getElementById(buttonId);
        this.statusElement = document.getElementById(statusId);

        // Using bind() to fix 'this'
        this.button.addEventListener('click', this.toggle.bind(this));

        this.updateDisplay();
    }

    toggle() {
        this.isOn = !this.isOn;
        console.log(`[bind()] Toggle state: ${this.isOn}, this is:`, this);
        this.updateDisplay();
    }

    updateDisplay() {
        this.statusElement.textContent = `Status: ${this.isOn ? 'ON' : 'OFF'}`;
        this.statusElement.className = `status ${this.isOn ? 'on' : 'off'}`;
    }
}

// Approach 2: Using arrow function wrapper
class ToggleSwitchArrow {
    constructor(buttonId, statusId) {
        this.isOn = false;
        this.button = document.getElementById(buttonId);
        this.statusElement = document.getElementById(statusId);

        // Using arrow function to preserve 'this'
        this.button.addEventListener('click', () => this.toggle());

        this.updateDisplay();
    }

    toggle() {
        this.isOn = !this.isOn;
        console.log(`[Arrow Wrapper] Toggle state: ${this.isOn}, this is:`, this);
        this.updateDisplay();
    }

    updateDisplay() {
        this.statusElement.textContent = `Status: ${this.isOn ? 'ON' : 'OFF'}`;
        this.statusElement.className = `status ${this.isOn ? 'on' : 'off'}`;
    }
}

// Approach 3: Using class field arrow function
class ToggleSwitchClassArrow {
    constructor(buttonId, statusId) {
        this.isOn = false;
        this.button = document.getElementById(buttonId);
        this.statusElement = document.getElementById(statusId);

        // Class field arrow function is automatically bound
        this.button.addEventListener('click', this.toggle);

        this.updateDisplay();
    }

    // Class field arrow function
    toggle = () => {
        this.isOn = !this.isOn;
        console.log(`[Class Arrow] Toggle state: ${this.isOn}, this is:`, this);
        this.updateDisplay();
    }

    updateDisplay() {
        this.statusElement.textContent = `Status: ${this.isOn ? 'ON' : 'OFF'}`;
        this.statusElement.className = `status ${this.isOn ? 'on' : 'off'}`;
    }
}

// Initialize all toggle switches
document.addEventListener('DOMContentLoaded', () => {
    new ToggleSwitchBind('bind-toggle', 'bind-status');
    new ToggleSwitchArrow('arrow-toggle', 'arrow-status');
    new ToggleSwitchClassArrow('class-arrow-toggle', 'class-arrow-status');

    console.log("All toggle switches initialized. Click the buttons to test different 'this' binding approaches.");
});