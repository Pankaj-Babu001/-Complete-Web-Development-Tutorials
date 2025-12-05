// Function to update countdown
function updateCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const currentTime = Date.now();
    const olympicTime = new Date(2028, 6, 14).getTime();
    let timer = olympicTime - currentTime;

    // Calculate time units
    const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    timer %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(timer / (1000 * 60 * 60));
    timer %= 1000 * 60 * 60;

    const minutes = Math.floor(timer / (1000 * 60));
    timer %= 1000 * 60;

    const seconds = Math.floor(timer / 1000);

    // Add animation class when value changes
    function animateValue(element, newValue) {
        if (element.textContent !== String(newValue)) {
            element.style.transform = 'scale(1.2)';
            element.textContent = newValue;
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Update display with animation
    animateValue(daysEl, days);
    animateValue(hoursEl, hours);
    animateValue(minutesEl, minutes);
    animateValue(secondsEl, seconds);
}

// Add smooth transition to time values
document.querySelectorAll('.time-value').forEach(el => {
    el.style.transition = 'transform 0.2s ease';
});

// Initial update
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);