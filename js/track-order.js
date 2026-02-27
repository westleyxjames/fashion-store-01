// Track Order Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const trackForm = document.getElementById('track-order-form');
    
    if (trackForm) {
        trackForm.addEventListener('submit', handleTrackOrder);
    }
});

function handleTrackOrder(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderNumber = formData.get('order-number');
    const email = formData.get('email');
    
    // Simulate order tracking
    console.log('Tracking order:', orderNumber, email);
    
    // Show order status
    displayOrderStatus(orderNumber, email);
}

function displayOrderStatus(orderNumber, email) {
    // Hide form, show status
    const formCard = document.querySelector('.track-form-card');
    const orderStatus = document.getElementById('order-status');
    
    if (formCard) formCard.style.display = 'none';
    if (orderStatus) {
        orderStatus.classList.remove('hidden');
        
        // Update order number display
        const orderNumberDisplay = document.getElementById('order-number-display');
        if (orderNumberDisplay) {
            orderNumberDisplay.textContent = `Order #${orderNumber}`;
        }
        
        // Simulate loading order items from cart or sample data
        const orderItemsList = document.getElementById('order-items-list');
        if (orderItemsList) {
            const sampleItems = PRODUCTS.slice(0, 2);
            orderItemsList.innerHTML = sampleItems.map(item => `
                <div style="display: flex; gap: 1rem; padding: 0.75rem; border-bottom: 1px solid var(--neutral-200);">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--border-radius);">
                    <div style="flex: 1;">
                        <div style="font-weight: 500; margin-bottom: 0.25rem;">${item.name}</div>
                        <div style="font-size: 0.875rem; color: var(--muted-foreground);">$${item.price}</div>
                    </div>
                </div>
            `).join('');
        }
        
        // Scroll to status
        orderStatus.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function resetTracking() {
    const formCard = document.querySelector('.track-form-card');
    const orderStatus = document.getElementById('order-status');
    const trackForm = document.getElementById('track-order-form');
    
    if (formCard) formCard.style.display = 'block';
    if (orderStatus) orderStatus.classList.add('hidden');
    if (trackForm) trackForm.reset();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
