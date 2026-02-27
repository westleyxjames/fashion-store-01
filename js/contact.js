// Contact Form Handler

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        orderNumber: formData.get('order-number'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    console.log('Contact form submitted:', data);
    
    // Show success message
    showToast('Thank you for contacting us! We\'ll respond within 24 hours.');
    
    // Reset form
    e.target.reset();
}
