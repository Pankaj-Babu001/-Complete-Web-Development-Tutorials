class ToggleSwitch {
    constructor() {
        this.isOn = false;
        this.button = document.createElement('button');

        // Three different approaches:

        // 1. bind() approach
        this.button.addEventListener('click', this.toggle.bind(this));

        // 2. Arrow function wrapper
        this.button.addEventListener('click', () => this.toggle());

        // 3. Class field arrow function
        // toggle = () => { ... } in class definition
    }

    toggle() {
        this.isOn = !this.isOn;
        console.log("Toggle state:", this.isOn);
    }
}