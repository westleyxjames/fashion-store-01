// Main JavaScript

// Cookie Consent
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice && cookieConsent) {
        setTimeout(() => {
            cookieConsent.classList.remove('hidden');
        }, 1000);
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.add('hidden');
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieConsent.classList.add('hidden');
        });
    }
}

// Scroll to Top
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Newsletter Form
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (email) {
            showToast('Thank you for subscribing!');
            form.reset();
        }
    });
}

// Load Products on Home Page
function loadHomeProducts() {
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    const essentialsGrid = document.getElementById('essentials-grid');
    
    if (newArrivalsGrid) {
        const newArrivals = PRODUCTS.slice(0, 8);
        newArrivalsGrid.innerHTML = newArrivals.map(product => createProductCard(product)).join('');
    }
    
    if (essentialsGrid) {
        const essentials = PRODUCTS.slice(8, 16);
        essentialsGrid.innerHTML = essentials.map(product => createProductCard(product)).join('');
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    initScrollToTop();
    initNewsletter();
    loadHomeProducts();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (menu && menu.classList.contains('active')) {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            toggleMobileMenu();
        }
    }
});
