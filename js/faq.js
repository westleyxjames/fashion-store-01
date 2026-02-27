// FAQ Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeFAQ();
});

function initializeFAQ() {
    // Initialize FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => toggleFAQ(item));
    });
    
    // Initialize category filters
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => filterFAQs(btn.dataset.category));
    });
}

function toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}

function filterFAQs(category) {
    // Update active button
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide sections
    const sections = document.querySelectorAll('.faq-section');
    sections.forEach(section => {
        if (category === 'all' || section.dataset.category === category) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
