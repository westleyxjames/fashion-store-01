// Reusable Components

// Header Component
function createHeader() {
    return `
        <div class="header">
            <div class="container">
                <div class="header-content">
                    <!-- Logo -->
                    <a href="index.html" class="logo">
                        <svg class="logo-icon moon-icon" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <span>LUNARIS</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <nav class="nav-desktop">
                        <a href="index.html" class="nav-link">Home</a>
                        <a href="shop.html" class="nav-link">Shop</a>
                        <a href="about.html" class="nav-link">About</a>
                        <a href="contact.html" class="nav-link">Contact</a>
                        <a href="faq.html" class="nav-link">FAQ</a>
                    </nav>

                    <!-- Header Actions -->
                    <div class="header-actions">
                        <a href="track-order.html" class="nav-link">Track Order</a>
                        <a href="cart.html" class="cart-button">
                            <svg class="icon" viewBox="0 0 24 24">
                                <path d="M9 2a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4V3a1 1 0 0 0-1-1H9z"></path>
                            </svg>
                            <span class="cart-badge">0</span>
                        </a>
                        <button class="mobile-menu-button" onclick="toggleMobileMenu()">
                            <svg class="icon" viewBox="0 0 24 24">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-header">
                <span class="logo">LUNARIS</span>
                <button onclick="toggleMobileMenu()">
                    <svg class="icon" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <nav class="mobile-menu-nav">
                <a href="index.html" class="mobile-nav-link">Home</a>
                <a href="shop.html" class="mobile-nav-link">Shop</a>
                <a href="about.html" class="mobile-nav-link">About</a>
                <a href="contact.html" class="mobile-nav-link">Contact</a>
                <a href="faq.html" class="mobile-nav-link">FAQ</a>
                <a href="track-order.html" class="mobile-nav-link">Track Order</a>
                <a href="cart.html" class="mobile-nav-link">Cart</a>
            </nav>
        </div>
        <div class="mobile-overlay" id="mobile-overlay" onclick="toggleMobileMenu()"></div>
    `;
}

// Footer Component
function createFooter() {
    return `
        <div class="footer">
            <div class="container">
                <div class="footer-grid">
                    <!-- Company Info -->
                    <div class="footer-section">
                        <div class="footer-logo">
                            <svg class="footer-logo-icon" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            <span class="logo">LUNARIS</span>
                        </div>
                        <p class="footer-description">
                            Your trusted online destination for quality products. Serving customers across the United States since 2024.
                        </p>
                        <div class="footer-contact">
                            <p>Email: <a href="mailto:help@lunarisshop.online">help@lunarisshop.online</a></p>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="about.html" class="footer-link">About Us</a></li>
                            <li><a href="shop.html" class="footer-link">Shop</a></li>
                            <li><a href="contact.html" class="footer-link">Contact</a></li>
                            <li><a href="faq.html" class="footer-link">FAQ</a></li>
                            <li><a href="track-order.html" class="footer-link">Track Order</a></li>
                        </ul>
                    </div>

                    <!-- Customer Service -->
                    <div class="footer-section">
                        <h3>Customer Service</h3>
                        <ul class="footer-links">
                            <li><a href="shipping-policy.html" class="footer-link">Shipping Policy</a></li>
                            <li><a href="return-policy.html" class="footer-link">Return Policy</a></li>
                            <li><a href="privacy-policy.html" class="footer-link">Privacy Policy</a></li>
                            <li><a href="terms.html" class="footer-link">Terms of Service</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <div class="footer-contact">
                            <p><strong>Email:</strong><br>
                            <a href="mailto:help@lunarisshop.online">help@lunarisshop.online</a></p>
                            <p><strong>Returns:</strong><br>
                            <a href="mailto:return@lunarisshop.online">return@lunarisshop.online</a></p>
                            <p><strong>Business Hours:</strong><br>
                            Mon-Fri: 9AM-6PM EST<br>
                            Sat-Sun: 10AM-4PM EST</p>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p class="footer-copyright">© 2024 Lunaris Shop. All rights reserved.</p>
                    <div class="payment-methods">
                        <span class="payment-badge">Visa</span>
                        <span class="payment-badge">Mastercard</span>
                        <span class="payment-badge">PayPal</span>
                        <span class="payment-badge">Apple Pay</span>
                        <span class="payment-badge">COD</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Product Card Component
function createProductCard(product) {
    const stars = Array(5).fill(0).map((_, i) => {
        const filled = i < Math.floor(product.rating);
        return `<svg class="star ${filled ? 'star-filled' : 'star-empty'}" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
            ${filled ? 'fill="currentColor"' : ''}></polygon>
        </svg>`;
    }).join('');

    return `
        <div class="product-card">
            <a href="product.html?id=${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
            </a>
            <div class="product-info">
                <a href="product.html?id=${product.id}">
                    <h3 class="product-name">${product.name}</h3>
                </a>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="star-rating">${stars}</div>
                    <span class="product-reviews">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCartHandler(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize components on page load
function initializeComponents() {
    const headerElement = document.getElementById('main-header');
    const footerElement = document.getElementById('main-footer');
    
    if (headerElement) {
        headerElement.innerHTML = createHeader();
    }
    
    if (footerElement) {
        footerElement.innerHTML = createFooter();
    }
    
    updateCartBadge();
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Add to cart handler
function addToCartHandler(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        cartManager.addToCart(product);
        showToast(`${product.name} added to cart!`);
    }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}
