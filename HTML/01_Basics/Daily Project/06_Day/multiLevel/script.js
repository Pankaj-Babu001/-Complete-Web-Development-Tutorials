// TechCorp Solutions - Main JavaScript File

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    initializeAnimations();
    initializeInteractiveElements();
    initializeFormHandlers();
    initializeMobileMenu();
    setupProgressBars();
    setupScrollEffects();
    setupTypingEffect();
    // showCookieConsent(); // Uncomment if you want cookie consent
}

// Animation initialization
function initializeAnimations() {
    // Animate progress bars when page loads
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card, .service-card, .package-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }
        });
    });
}

// Interactive elements initialization
function initializeInteractiveElements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, input[type="submit"], button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize tooltips
    initializeTooltips();
}

// Ripple effect for buttons
function createRippleEffect(event, element) {
    const button = element;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    // Ensure button has relative positioning
    if (getComputedStyle(button).position === 'static') {
        button.style.position = 'relative';
    }
    button.style.overflow = 'hidden';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Form handlers
function initializeFormHandlers() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (this.id === 'contactForm') {
                handleContactFormSubmit(e);
            } else if (this.classList.contains('newsletter-form')) {
                handleNewsletterSubmit(e);
            }
        });
    });
    
    // Add real-time validation
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidationError);
    });
}

// Contact form submission handler
function handleContactFormSubmit(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = event.target.querySelector('input[type="submit"]');
    const originalText = submitBtn.value;
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showNotification(
            `Thank you for your message, ${data.name}! We'll get back to you within 24 hours.`,
            'success'
        );
        
        // Reset form
        event.target.reset();
        
        // Reset button
        submitBtn.value = originalText;
        submitBtn.disabled = false;
        
        // Track form submission (analytics)
        trackEvent('form_submission', 'contact', data.service || 'general');
        
    }, 1500);
}

// Newsletter submission handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    const submitBtn = event.target.querySelector('input[type="submit"]');
    
    submitBtn.value = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Successfully subscribed to our newsletter!', 'success');
        event.target.reset();
        submitBtn.value = 'Subscribe';
        submitBtn.disabled = false;
    }, 1000);
}

// Input validation
function validateInput(event) {
    const input = event.target;
    const value = input.value.trim();
    
    // Remove existing error styling
    input.classList.remove('error');
    removeErrorMessage(input);
    
    // Validate based on input type
    if (input.type === 'email' && value) {
        if (!isValidEmail(value)) {
            showInputError(input, 'Please enter a valid email address');
        }
    } else if (input.type === 'tel' && value) {
        if (!isValidPhone(value)) {
            showInputError(input, 'Please enter a valid phone number');
        }
    } else if (input.required && !value) {
        showInputError(input, 'This field is required');
    }
}

function clearValidationError(event) {
    const input = event.target;
    input.classList.remove('error');
    removeErrorMessage(input);
}

function showInputError(input, message) {
    input.classList.add('error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.25rem';
    
    input.parentNode.appendChild(errorElement);
}

function removeErrorMessage(input) {
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Validation helpers
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Mobile menu functionality
function initializeMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.color = 'white';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.cursor = 'pointer';
    
    nav.appendChild(mobileMenuBtn);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
        this.innerHTML = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
    });
    
    // Show/hide mobile menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navLinks.style.display = navLinks.classList.contains('mobile-active') ? 'flex' : 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.classList.remove('mobile-active');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Progress bar animation
function setupProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width') || progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Scroll effects
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('.section, .feature-card, .service-card, .team-member');
    sections.forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.transitionDelay = `${index * 0.1}s`;
        fadeObserver.observe(section);
    });
}

// Typing effect for hero title
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && window.location.pathname.includes('index.html')) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Notification system
function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styling
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '5px',
        color: 'white',
        fontWeight: 'bold',
        zIndex: '10000',
        maxWidth: '400px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    // Set background color based on type
    const colors = {
        success: '#2ecc71',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Simple analytics tracking
function trackEvent(category, action, label = null) {
    // This would typically send data to your analytics service
    console.log(`Analytics Event: ${category} | ${action} | ${label}`);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Cookie consent functionality
function showCookieConsent() {
    if (localStorage.getItem('cookieConsent')) {
        return;
    }
    
    const banner = document.createElement('div');
    banner.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #2c3e50; color: white; padding: 1.5rem; text-align: center; z-index: 10000; box-shadow: 0 -4px 15px rgba(0,0,0,0.2);">
            <p style="margin: 0 0 1rem 0; font-size: 1rem;">We use cookies to enhance your experience and analyze site usage. By continuing to visit this site, you agree to our use of cookies.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="acceptCookies()" style="background: #2ecc71; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer; font-weight: bold;">Accept All</button>
                <button onclick="declineCookies()" style="background: #e74c3c; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer; font-weight: bold;">Decline</button>
                <button onclick="showCookieSettings()" style="background: transparent; color: white; border: 2px solid white; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer; font-weight: bold;">Settings</button>
            </div>
        </div>
    `;
    document.body.appendChild(banner);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    removeCookieBanner();
    showNotification('Cookie preferences saved successfully!', 'success');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    removeCookieBanner();
    showNotification('Cookie preferences saved. Some features may be limited.', 'info');
}

function showCookieSettings() {
    // This would open a new window to manage cookie preferences
    window.open('https://example.com/cookie-settings', '_blank');
}