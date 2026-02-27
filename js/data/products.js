// Products Data
const PRODUCTS = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        price: 29.99,
        category: "Tops",
        description: "Soft, breathable cotton tee perfect for everyday wear",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"],
        rating: 4.5,
        reviews: 128,
        benefits: ["100% Cotton", "Machine Washable", "Classic Fit"],
        specifications: {
            Material: "100% Cotton",
            Fit: "Regular",
            Care: "Machine Wash Cold"
        }
    },
    {
        id: 2,
        name: "Slim Fit Denim Jeans",
        price: 79.99,
        category: "Bottoms",
        description: "Modern slim fit jeans with stretch comfort",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80"],
        rating: 4.8,
        reviews: 256,
        benefits: ["Stretch Denim", "5-Pocket Design", "Durable Construction"],
        specifications: {
            Material: "98% Cotton, 2% Elastane",
            Fit: "Slim",
            Care: "Machine Wash Cold"
        }
    },
    {
        id: 3,
        name: "Leather Crossbody Bag",
        price: 129.99,
        category: "Accessories",
        description: "Elegant leather bag with adjustable strap",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"],
        rating: 4.7,
        reviews: 89,
        benefits: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap"],
        specifications: {
            Material: "Genuine Leather",
            Dimensions: "10x8x3 inches",
            Closure: "Zipper"
        }
    },
    {
        id: 4,
        name: "Wool Blend Coat",
        price: 199.99,
        category: "Outerwear",
        description: "Luxurious wool blend coat for cold weather",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80"],
        rating: 4.9,
        reviews: 142,
        benefits: ["Wool Blend", "Warm & Stylish", "Classic Design"],
        specifications: {
            Material: "80% Wool, 20% Polyester",
            Fit: "Regular",
            Care: "Dry Clean Only"
        }
    },
    {
        id: 5,
        name: "Canvas Sneakers",
        price: 59.99,
        category: "Footwear",
        description: "Comfortable canvas sneakers for everyday style",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"],
        rating: 4.6,
        reviews: 203,
        benefits: ["Canvas Upper", "Cushioned Insole", "Versatile Design"],
        specifications: {
            Material: "Canvas",
            Sole: "Rubber",
            Style: "Low-Top"
        }
    },
    {
        id: 6,
        name: "Silk Scarf",
        price: 45.99,
        category: "Accessories",
        description: "Luxurious silk scarf with elegant pattern",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80"],
        rating: 4.8,
        reviews: 76,
        benefits: ["100% Silk", "Hand-Rolled Edges", "Multiple Styling Options"],
        specifications: {
            Material: "100% Silk",
            Dimensions: "35x35 inches",
            Care: "Dry Clean"
        }
    },
    {
        id: 7,
        name: "Knit Sweater",
        price: 89.99,
        category: "Tops",
        description: "Cozy knit sweater perfect for layering",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"],
        rating: 4.7,
        reviews: 167,
        benefits: ["Soft Knit", "Comfortable Fit", "Easy Care"],
        specifications: {
            Material: "Acrylic Blend",
            Fit: "Relaxed",
            Care: "Machine Wash"
        }
    },
    {
        id: 8,
        name: "Wide Leg Trousers",
        price: 94.99,
        category: "Bottoms",
        description: "Elegant wide leg trousers with a modern silhouette",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"],
        rating: 4.5,
        reviews: 94,
        benefits: ["Wide Leg", "High Waist", "Tailored Fit"],
        specifications: {
            Material: "Polyester Blend",
            Fit: "Wide Leg",
            Care: "Machine Wash Cold"
        }
    }
];

// Add more products (total 40)
for (let i = 9; i <= 40; i++) {
    const categories = ["Tops", "Bottoms", "Accessories", "Outerwear", "Footwear", "Dresses"];
    const category = categories[i % categories.length];
    
    PRODUCTS.push({
        id: i,
        name: `Fashion Item ${i}`,
        price: Math.floor(Math.random() * 150) + 29.99,
        category: category,
        description: `Premium ${category.toLowerCase()} item with exceptional quality and style`,
        image: `https://images.unsplash.com/photo-${1520000000000 + i * 1000000}?w=800&q=80`,
        images: [`https://images.unsplash.com/photo-${1520000000000 + i * 1000000}?w=800&q=80`],
        rating: 4 + Math.random(),
        reviews: Math.floor(Math.random() * 300) + 50,
        benefits: ["High Quality", "Stylish Design", "Comfortable Fit"],
        specifications: {
            Material: "Premium Fabric",
            Fit: "Regular",
            Care: "Machine Wash"
        }
    });
}
