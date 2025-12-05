// ==================== OUTPUT FUNCTIONS ====================

function log(message, type = 'normal') {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.className = 'output-line';

    if (type === 'success') {
        line.innerHTML = `<span style="color: #86efac;"><i class="fas fa-check-circle"></i> ${message}</span>`;
    } else if (type === 'process') {
        line.innerHTML = `<span style="color: #fbbf24;"><i class="fas fa-spinner fa-spin"></i> ${message}</span>`;
    } else if (type === 'step') {
        line.innerHTML = `<span style="color: #00f5ff;"><i class="fas fa-arrow-right"></i> ${message}</span>`;
    } else if (type === 'error') {
        line.innerHTML = `<span style="color: #ff6b6b;"><i class="fas fa-exclamation-circle"></i> ${message}</span>`;
    } else {
        line.textContent = message;
    }

    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

// ==================== ASYNC SIMULATION FUNCTIONS ====================

function placeOrder(orderId, callback) {
    log(`📦 Placing Order #${orderId}...`, 'process');
    setTimeout(() => {
        log(`✅ Order #${orderId} placed successfully`, 'success');
        callback(null, orderId);
    }, 1200);
}

function prepareFood(orderId, callback) {
    log(`👨‍🍳 Preparing Food for Order #${orderId}...`, 'process');
    setTimeout(() => {
        log(`✅ Food for Order #${orderId} prepared`, 'success');
        callback(null, orderId);
    }, 1200);
}

function assignDelivery(orderId, callback) {
    log(`🚴 Assigning Delivery Person for Order #${orderId}...`, 'process');
    setTimeout(() => {
        log(`✅ Delivery Person assigned for Order #${orderId}`, 'success');
        callback(null, orderId);
    }, 1200);
}

function deliverFood(orderId, address, callback) {
    log(`🛵 Delivering Order #${orderId} to ${address}...`, 'process');
    setTimeout(() => {
        log(`✅ Order #${orderId} delivered to ${address}`, 'success');
        callback(null, orderId);
    }, 1200);
}

function processPayment(orderId, amount, callback) {
    log(`💳 Processing Payment of $${amount} for Order #${orderId}...`, 'process');
    setTimeout(() => {
        log(`✅ Payment of $${amount} processed for Order #${orderId}`, 'success');
        callback(null, orderId);
    }, 1200);
}

// ==================== CALLBACK HELL DEMO ====================

function runFoodDelivery() {
    clearOutput();
    log('🚀 Starting Food Delivery System...', 'step');
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'step');

    const orderId = Math.floor(Math.random() * 10000) + 1;
    const address = '123 Main Street';
    const amount = 29.99;

    // THIS IS CALLBACK HELL - PYRAMID OF DOOM
    placeOrder(orderId, function(err, id) {
        if (err) {
            log(`❌ Error placing order: ${err}`, 'error');
            return;
        }

        prepareFood(id, function(err, id) {
            if (err) {
                log(`❌ Error preparing food: ${err}`, 'error');
                return;
            }

            assignDelivery(id, function(err, id) {
                if (err) {
                    log(`❌ Error assigning delivery: ${err}`, 'error');
                    return;
                }

                deliverFood(id, address, function(err, id) {
                    if (err) {
                        log(`❌ Error delivering food: ${err}`, 'error');
                        return;
                    }

                    processPayment(id, amount, function(err, id) {
                        if (err) {
                            log(`❌ Error processing payment: ${err}`, 'error');
                            return;
                        }

                        log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'step');
                        log('🎉 ALL STEPS COMPLETED SUCCESSFULLY! 🎉', 'success');
                        log(`Order #${id} delivered to customer!`, 'success');
                    });
                });
            });
        });
    });
}

// ==================== PAGE INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press 'D' to start demo
        if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey) {
            const output = document.getElementById('output');
            if (output && output.parentElement.offsetParent !== null) {
                runFoodDelivery();
            }
        }

        // Press 'C' to clear output
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
            const output = document.getElementById('output');
            if (output && output.parentElement.offsetParent !== null) {
                clearOutput();
            }
        }
    });

    console.log('%c🎉 Callback Hell Tutorial Loaded!', 'color: #00f5ff; font-size: 16px; font-weight: bold;');
    console.log('%cPress D to run demo, C to clear output', 'color: #fbbf24; font-size: 12px;');
});

// ==================== UTILITY FUNCTIONS ====================

// Function to highlight code syntax (optional enhancement)
function highlightCode() {
    document.querySelectorAll('.code-block pre').forEach(block => {
        const code = block.textContent;
        // Add syntax highlighting if needed
    });
}

// Function to track demo performance
function trackDemoStart() {
    console.log('%cDemo started at:', 'color: #00f5ff', new Date().toLocaleTimeString());
}

// Function to get random emoji variants
function getRandomDeliveryEmoji() {
    const emojis = ['🛵', '🚗', '🏍️', '🚲'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}