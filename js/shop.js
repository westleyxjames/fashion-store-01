// Shop Page JavaScript

let currentFilters = {
    category: 'All',
    priceRange: 'all',
    sortBy: 'featured'
};

// Initialize shop page
function initShop() {
    loadCategories();
    setupFilterListeners();
    displayProducts();
}

// Load categories
function loadCategories() {
    const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
    const categoryFilters = document.getElementById('category-filters');
    
    if (!categoryFilters) return;
    
    categoryFilters.innerHTML = categories.map(category => `
        <label class="filter-option">
            <input type="radio" name="category" value="${category}" ${category === 'All' ? 'checked' : ''}>
            <span>${category}</span>
        </label>
    `).join('');
}

// Setup filter listeners
function setupFilterListeners() {
    // Category filters
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    categoryInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            currentFilters.category = e.target.value;
            displayProducts();
        });
    });
    
    // Price filters
    const priceInputs = document.querySelectorAll('input[name="price"]');
    priceInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            currentFilters.priceRange = e.target.value;
            displayProducts();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentFilters.sortBy = e.target.value;
            displayProducts();
        });
    }
}

// Filter products
function filterProducts() {
    let filtered = PRODUCTS;
    
    // Filter by category
    if (currentFilters.category !== 'All') {
        filtered = filtered.filter(p => p.category === currentFilters.category);
    }
    
    // Filter by price
    if (currentFilters.priceRange === 'under50') {
        filtered = filtered.filter(p => p.price < 50);
    } else if (currentFilters.priceRange === '50to100') {
        filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
    } else if (currentFilters.priceRange === 'over100') {
        filtered = filtered.filter(p => p.price > 100);
    }
    
    return filtered;
}

// Sort products
function sortProducts(products) {
    const sorted = [...products];
    
    if (currentFilters.sortBy === 'price-low') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sortBy === 'price-high') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (currentFilters.sortBy === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
    }
    
    return sorted;
}

// Display products
function displayProducts() {
    const filtered = filterProducts();
    const sorted = sortProducts(filtered);
    
    const grid = document.getElementById('products-grid');
    const noProducts = document.getElementById('no-products');
    const productCount = document.getElementById('product-count');
    const totalCount = document.getElementById('total-count');
    
    if (!grid) return;
    
    // Update counts
    if (productCount) productCount.textContent = sorted.length;
    if (totalCount) totalCount.textContent = PRODUCTS.length;
    
    if (sorted.length === 0) {
        grid.innerHTML = '';
        if (noProducts) noProducts.classList.remove('hidden');
    } else {
        if (noProducts) noProducts.classList.add('hidden');
        grid.innerHTML = sorted.map(product => createProductCard(product)).join('');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initShop);
