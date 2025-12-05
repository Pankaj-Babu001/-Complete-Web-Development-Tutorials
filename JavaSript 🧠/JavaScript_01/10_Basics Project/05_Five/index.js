let is24HourFormat = false;

const hoursCircle = document.getElementById('hoursCircle');
const minutesCircle = document.getElementById('minutesCircle');
const secondsCircle = document.getElementById('secondsCircle');

// Calculate circumferences
const hoursCircumference = 2 * Math.PI * 180;
const minutesCircumference = 2 * Math.PI * 150;
const secondsCircumference = 2 * Math.PI * 120;

// Set up circles
hoursCircle.style.strokeDasharray = hoursCircumference;
minutesCircle.style.strokeDasharray = minutesCircumference;
secondsCircle.style.strokeDasharray = secondsCircumference;

function setProgress(circle, circumference, percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

// Date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    document.getElementById('date').textContent =
        `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

// Calculate progress
    let hoursPercent, maxHours;
    let period = '';

    if (is24HourFormat) {
        maxHours = 24;
        hoursPercent = (hours / maxHours) * 100;
        document.getElementById('periodBadge').style.display = 'none';
    } else {
        maxHours = 12;
        period = hours >= 12 ? 'PM' : 'AM';
        let displayHours = hours % 12;
        displayHours = displayHours ? displayHours : 12;
        hoursPercent = (displayHours / maxHours) * 100;
        hours = displayHours;
        document.getElementById('periodBadge').style.display = 'block';
        document.getElementById('period').textContent = period;
    }

    const minutesPercent = (minutes / 60) * 100;
    const secondsPercent = (seconds / 60) * 100;

// Update circles
    setProgress(hoursCircle, hoursCircumference, hoursPercent);
    setProgress(minutesCircle, minutesCircumference, minutesPercent);
    setProgress(secondsCircle, secondsCircumference, secondsPercent);

// Update time display
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Format toggle
document.getElementById('formatBtn').addEventListener('click', function() {
    is24HourFormat = !is24HourFormat;
    this.querySelector('span').textContent = is24HourFormat ? '12H' : '24H';
    this.classList.toggle('active');
    updateClock();
});

// Theme toggle
document.getElementById('themeBtn').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    this.classList.toggle('active');
});

// Initialize and update
updateClock();
setInterval(updateClock, 1000);