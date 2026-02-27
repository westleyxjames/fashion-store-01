// Order Confirmation Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    loadOrderConfirmation();
});

function loadOrderConfirmation() {
    // Get order data from localStorage or URL params
    const orderData = getOrderData();
    
    if (orderData) {
        displayOrderConfirmation(orderData);
    } else {
        // Use sample data if no order data available
        displaySampleOrder();
    }
}

function getOrderData() {
    // Try to get from localStorage
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
        return JSON.parse(savedOrder);
    }
    
    // Try to get from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const orderNumber = urlParams.get('order');
    
    if (orderNumber) {
        return {
            orderNumber: orderNumber,
            items: [],
            total: 0
        };
    }
    
    return null;
}

function displayOrderConfirmation(orderData) {
    // Update order number
    const orderNumberDisplay = document.getElementById('order-number-display');
    if (orderNumberDisplay) {
        orderNumberDisplay.textContent = orderData.orderNumber || 'LUN-' + Date.now();
    }
    
    // Display order items
    const orderItems = document.getElementById('order-items');
    if (orderItems && orderData.items) {
        orderItems.innerHTML = orderData.items.map(item => `
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--neutral-200);">
                <div>
                    <div style="font-weight: 500;">${item.name}</div>
                    <div style="font-size: 0.875rem; color: var(--muted-foreground);">Qty: ${item.quantity}</div>
                </div>
                <div style="font-weight: 500;">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');
    }
    
    // Update totals
    if (orderData.subtotal) {
        const subtotalDisplay = document.getElementById('subtotal-display');
        if (subtotalDisplay) subtotalDisplay.textContent = `$${orderData.subtotal.toFixed(2)}`;
    }
    
    if (orderData.shipping !== undefined) {
        const shippingDisplay = document.getElementById('shipping-display');
        if (shippingDisplay) {
            shippingDisplay.textContent = orderData.shipping === 0 ? 'FREE' : `$${orderData.shipping.toFixed(2)}`;
        }
    }
    
    if (orderData.total) {
        const totalDisplay = document.getElementById('total-display');
        if (totalDisplay) totalDisplay.textContent = `$${orderData.total.toFixed(2)}`;
    }
    
    // Update shipping address
    if (orderData.shippingAddress) {
        updateShippingAddress(orderData.shippingAddress);
    }
    
    // Update payment method
    if (orderData.paymentMethod) {
        const paymentType = document.getElementById('payment-type');
        if (paymentType) paymentType.textContent = orderData.paymentMethod;
    }
    
    // Update customer email
    if (orderData.email) {
        const customerEmail = document.getElementById('customer-email');
        if (customerEmail) customerEmail.textContent = orderData.email;
    }
    
    // Clear cart after successful order
    if (typeof cartManager !== 'undefined') {
        cartManager.clearCart();
    }
}

function updateShippingAddress(address) {
    const fields = {
        'ship-name': address.name,
        'ship-address1': address.address1,
        'ship-address2': address.address2,
        'ship-city-state': `${address.city}, ${address.state} ${address.zip}`,
        'ship-country': address.country || 'United States'
    };
    
    Object.entries(fields).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element && value) {
            element.textContent = value;
            if (id === 'ship-address2' && !value) {
                element.style.display = 'none';
            }
        }
    });
}

function displaySampleOrder() {
    // Display sample order for demo purposes
    const cart = typeof cartManager !== 'undefined' ? cartManager.getCart() : [];
    
    if (cart.length > 0) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 4.99;
        const total = subtotal + shipping;
        
        displayOrderConfirmation({
            orderNumber: 'LUN-' + Date.now(),
            items: cart,
            subtotal: subtotal,
            shipping: shipping,
            total: total,
            email: 'customer@example.com',
            paymentMethod: 'Cash on Delivery (COD)',
            shippingAddress: {
                name: 'John Doe',
                address1: '123 Main Street',
                address2: '',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'United States'
            }
        });
    } else {
        // Use default sample data
        displayOrderConfirmation({
            orderNumber: 'LUN-123456789',
            items: [],
            subtotal: 89.98,
            shipping: 0,
            total: 89.98,
            email: 'customer@example.com',
            paymentMethod: 'Cash on Delivery (COD)',
            shippingAddress: {
                name: 'John Doe',
                address1: '123 Main Street',
                city: 'New York',
                state: 'NY',
                zip: '10001'
            }
        });
    }
}
