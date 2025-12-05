const body = document.querySelector('body');
const cursor = document.querySelector('.custom-cursor');
const clickCountEl = document.getElementById('clickCount');
const activeCountEl = document.getElementById('activeCount');

let clickCount = 0;
let activeElements = 0;
let mouseX = 0;
let mouseY = 0;

const messages = ['✦', '◆', '✧', '◇', '❖', '✶', '✷', '✸', '❂', '✺'];
const luxuryColors = [
    '#FFD700', // Gold
    '#FF6B9D', // Rose Gold
    '#00D4FF', // Electric Blue
    '#B19CD9', // Lavender
    '#FF69B4', // Hot Pink
    '#7FFFD4', // Aquamarine
    '#FFB347', // Pastel Orange
    '#DDA0DD', // Plum
    '#98FB98', // Mint
    '#F0E68C'  // Khaki
];

// Custom cursor follow
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX - 10}px`;
    cursor.style.top = `${mouseY - 10}px`;

    // Create subtle trail
    if (Math.random() > 0.85) {
        createTrail(mouseX, mouseY);
    }
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicking');
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    trail.style.background = luxuryColors[Math.floor(Math.random() * luxuryColors.length)];
    body.appendChild(trail);

    trail.animate([
        { opacity: 0.6, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0)' }
    ], {
        duration: 600,
        easing: 'ease-out'
    });

    setTimeout(() => trail.remove(), 600);
}

function createParticles(x, y, color) {
    const particleCount = 16;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.background = color;
        particle.style.color = color;

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 150 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        body.appendChild(particle);

        const duration = 1200 + Math.random() * 800;
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1,
                filter: 'blur(0px)'
            },
            {
                transform: `translate(${tx * 0.5}px, ${ty * 0.5}px) scale(1.5)`,
                opacity: 0.8,
                filter: 'blur(1px)'
            },
            {
                transform: `translate(${tx}px, ${ty}px) scale(0.5)`,
                opacity: 0,
                filter: 'blur(3px)'
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
        });

        setTimeout(() => particle.remove(), duration);
    }
}

function createGlowRings(x, y, color) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const ring = document.createElement('div');
            ring.classList.add('glow-ring');
            ring.style.borderColor = color;
            ring.style.color = color;
            ring.style.left = `${x}px`;
            ring.style.top = `${y}px`;
            body.appendChild(ring);

            setTimeout(() => ring.remove(), 2000);
        }, i * 200);
    }
}

body.addEventListener('click', (e) => {
    clickCount++;
    clickCountEl.textContent = clickCount;

    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');

    const size = 80 + Math.random() * 40;
    circleElement.style.width = `${size}px`;
    circleElement.style.height = `${size}px`;

    const message = messages[Math.floor(Math.random() * messages.length)];
    circleElement.textContent = message;
    circleElement.style.fontSize = `${size * 0.5}px`;

    const color = luxuryColors[Math.floor(Math.random() * luxuryColors.length)];
    circleElement.style.color = color;

    circleElement.style.top = `${e.clientY - size/2}px`;
    circleElement.style.left = `${e.clientX - size/2}px`;

    body.appendChild(circleElement);

    activeElements++;
    activeCountEl.textContent = activeElements;

    createParticles(e.clientX, e.clientY, color);
    createGlowRings(e.clientX, e.clientY, color);

    setTimeout(() => {
        circleElement.remove();
        activeElements--;
        activeCountEl.textContent = activeElements;
    }, 4000);
});

// Floating animation for panels
const infoPanel = document.querySelector('.info-panel');
const stats = document.querySelector('.stats');
let floatOffset = 0;

setInterval(() => {
    floatOffset += 0.03;
    const offset = Math.sin(floatOffset) * 8;
    infoPanel.style.transform = `translateX(-50%) translateY(${offset}px)`;
    stats.style.transform = `translateX(-50%) translateY(${-offset}px)`;
}, 50);