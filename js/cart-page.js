// Cart Page JavaScript

function renderCartPage() {
    const cart = cartManager.getCart();
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.classList.remove('hidden');
        if (cartContent) cartContent.classList.add('hidden');
        return;
    }
    
    if (emptyCart) emptyCart.classList.add('hidden');
    if (cartContent) cartContent.classList.remove('hidden');
    
    renderCartItems();
    updateCartSummary();
}

function renderCartItems() {
    const cart = cartManager.getCart();
    const cartList = document.getElementById('cart-items-list');
    
    if (!cartList) return;
    
    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <a href="product.html?id=${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            </a>
            
            <div class="cart-item-details">
                <a href="product.html?id=${item.id}">
                    <h3 class="cart-item-name">${item.name}</h3>
                </a>
                <p class="cart-item-category">${item.category}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">
                    <svg class="icon-sm" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">
                    <svg class="icon-sm" viewBox="0 0 24 24">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
            
            <button class="remove-btn" onclick="removeItem(${item.id})">
                <svg class="icon" viewBox="0 0 24 24">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
            
            <div class="cart-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    `).join('');
}

function updateCartSummary() {
    const subtotal = cartManager.getTotalPrice();
    const shipping = subtotal > 50 ? 0 : 4.99;
    const total = subtotal + shipping;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    const shippingMessage = document.getElementById('shipping-message');
    
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    
    if (shippingMessage) {
        if (subtotal < 50) {
            shippingMessage.textContent = `Add $${(50 - subtotal).toFixed(2)} more for free shipping!`;
        } else {
            shippingMessage.textContent = '';
        }
    }
}

function updateItemQuantity(productId, quantity) {
    cartManager.updateQuantity(productId, quantity);
    renderCartPage();
    showToast('Cart updated');
}

function removeItem(productId) {
    cartManager.removeFromCart(productId);
    renderCartPage();
    showToast('Item removed from cart');
}

// Subscribe to cart updates
cartManager.subscribe(() => {
    renderCartPage();
});

// Initialize on load
document.addEventListener('DOMContentLoaded', renderCartPage);
