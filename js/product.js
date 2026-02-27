// Product Page JavaScript

let currentProduct = null;
let currentQuantity = 1;

function initProductPage() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }
    
    // Find product
    currentProduct = PRODUCTS.find(p => p.id === productId);
    
    if (!currentProduct) {
        window.location.href = '404.html';
        return;
    }
    
    // Render product
    renderProduct();
    renderRelatedProducts();
}

function renderProduct() {
    // Update page title
    document.title = `${currentProduct.name} - Lunaris Shop`;
    
    // Breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-product');
    if (breadcrumb) breadcrumb.textContent = currentProduct.name;
    
    // Main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = currentProduct.image;
        mainImage.alt = currentProduct.name;
    }
    
    // Thumbnails
    const thumbnails = document.getElementById('image-thumbnails');
    if (thumbnails && currentProduct.images) {
        thumbnails.innerHTML = currentProduct.images.map((img, idx) => `
            <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeImage('${img}', ${idx})">
                <img src="${img}" alt="${currentProduct.name} ${idx + 1}">
            </div>
        `).join('');
    }
    
    // Product name
    const productName = document.getElementById('product-name');
    if (productName) productName.textContent = currentProduct.name;
    
    // Rating
    const starsContainer = document.getElementById('product-stars');
    if (starsContainer) {
        const stars = Array(5).fill(0).map((_, i) => {
            const filled = i < Math.floor(currentProduct.rating);
            return `<svg class="star ${filled ? 'star-filled' : 'star-empty'}" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
                ${filled ? 'fill="currentColor"' : ''}></polygon>
            </svg>`;
        }).join('');
        starsContainer.innerHTML = stars;
    }
    
    const ratingText = document.getElementById('product-rating-text');
    if (ratingText) {
        ratingText.textContent = `${currentProduct.rating} (${currentProduct.reviews} reviews)`;
    }
    
    // Price
    const price = document.getElementById('product-price');
    if (price) price.textContent = `$${currentProduct.price.toFixed(2)}`;
    
    // Description
    const description = document.getElementById('product-description');
    if (description) description.textContent = currentProduct.description;
    
    // Benefits
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection && currentProduct.benefits) {
        benefitsSection.innerHTML = `
            <div>
                <h3>Key Benefits</h3>
                <ul class="benefits-list">
                    ${currentProduct.benefits.map(benefit => `
                        <li class="benefit-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>${benefit}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    // Specifications
    const specsSection = document.getElementById('specifications-section');
    if (specsSection && currentProduct.specifications) {
        specsSection.innerHTML = `
            <div>
                <h3>Specifications</h3>
                <div class="specs-list">
                    ${Object.entries(currentProduct.specifications).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-label">${key}:</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function changeImage(imageSrc, index) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) mainImage.src = imageSrc;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, idx) => {
        if (idx === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function increaseQuantity() {
    currentQuantity++;
    updateQuantityDisplay();
}

function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        updateQuantityDisplay();
    }
}

function updateQuantityDisplay() {
    const quantityValue = document.getElementById('quantity-value');
    if (quantityValue) quantityValue.textContent = currentQuantity;
}

function addToCartFromProduct() {
    if (currentProduct) {
        cartManager.addToCart(currentProduct, currentQuantity);
        showToast(`${currentQuantity} x ${currentProduct.name} added to cart!`);
    }
}

function buyNow() {
    if (currentProduct) {
        cartManager.addToCart(currentProduct, currentQuantity);
        window.location.href = 'checkout.html';
    }
}

function renderRelatedProducts() {
    if (!currentProduct) return;
    
    const relatedProducts = PRODUCTS
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    const relatedGrid = document.getElementById('related-products');
    if (relatedGrid) {
        relatedGrid.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initProductPage);
