const products = [
    {
        id: 1,
        name: "Running Shoes",
        description: "High-performance running shoes for all terrains",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        category: "footwear"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        description: "Noise-cancelling wireless headphones with 30hr battery",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "electronics"
    },
    {
        id: 3,
        name: "Smart Watch",
        description: "Fitness tracker with heart rate monitor and GPS",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "electronics"
    },
    {
        id: 4,
        name: "Leather Wallet",
        description: "Genuine leather wallet with RFID protection",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1591561954555-607968c989ab",
        category: "accessories"
    },
    {
        id: 5,
        name: "Backpack",
        description: "Water-resistant backpack with laptop compartment",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        category: "accessories"
    },
    {
        id: 6,
        name: "Yoga Mat",
        description: "Non-slip yoga mat with carrying strap",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
        category: "fitness"
    },
    {
        id: 7,
        name: "Coffee Maker",
        description: "Programmable coffee maker with thermal carafe",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1582515073490-39981397c445",
        category: "home"
    },
    {
        id: 8,
        name: "Blender",
        description: "High-speed blender for smoothies and food prep",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1560026301-88340cf16be7",
        category: "home"
    },
    {
        id: 9,
        name: "Desk Lamp",
        description: "Adjustable LED desk lamp with touch controls",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
        category: "home"
    },
    {
        id: 10,
        name: "Water Bottle",
        description: "Insulated stainless steel water bottle",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1602143407151-7111541de1d8",
        category: "accessories"
    },
    {
        id: 11,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with silent clicks",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        category: "electronics"
    },
    {
        id: 12,
        name: "Notebook Set",
        description: "Premium leather-bound notebook set",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
        category: "office"
    },{
id: 13,
name: "Gaming Keyboard",
description: "Mechanical RGB keyboard with customizable keys",
price: 79.99,
image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
category: "electronics"
},
{
id: 14,
name: "Sunglasses",
description: "Polarized sunglasses with UV protection",
price: 39.99,
image: "https://images.unsplash.com/photo-1600181954473-3a2f26895b69",
category: "accessories"
},
{
id: 15,
name: "Bluetooth Speaker",
description: "Portable waterproof Bluetooth speaker",
price: 59.99,
image: "https://images.unsplash.com/photo-1610210637618-701c95f2fa1c",
category: "electronics"
},
{
id: 16,
name: "Fitness Tracker Band",
description: "Tracks steps, sleep, and heart rate",
price: 49.99,
image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
category: "fitness"
},
{
id: 17,
name: "Office Chair",
description: "Ergonomic chair with lumbar support",
price: 139.99,
image: "https://images.unsplash.com/photo-1598300053654-7a334b0dfd0c",
category: "office"
},
{
id: 18,
name: "Wireless Charger",
description: "Fast wireless charging pad",
price: 29.99,
image: "https://images.unsplash.com/photo-1580910051070-f85906b16f15",
category: "electronics"
},
{
id: 19,
name: "Photo Frame Set",
description: "Set of 3 wooden photo frames",
price: 22.99,
image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8",
category: "home"
},
{
id: 20,
name: "Mini Tripod",
description: "Adjustable tripod for phone and camera",
price: 18.99,
image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
category: "electronics"
}
];

let cart = [];

const productsContainer = document.getElementById('products-container');
const cartBtn = document.getElementById('cart-btn');
const cartPanel = document.getElementById('cart-panel');
const closeCartBtn = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartTotal = document.getElementById('cart-total');
const emptyCartMessage = document.getElementById('empty-cart-message');
const checkoutBtn = document.getElementById('checkout-btn');
const themeToggle = document.getElementById('theme-toggle');

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    loadThemePreference();
});

function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-lg text-gray-800 dark:text-white">${product.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 mt-1">${product.description}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="font-bold text-blue-600 dark:text-blue-400">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showCartNotification(product.name);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    updateCartTotals();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('hidden', totalItems === 0);
}

function renderCartItems() {
    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        cartItemsContainer.innerHTML = '';
        return;
    }

    emptyCartMessage.classList.add('hidden');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
            <div class="flex-1">
                <h3 class="font-medium text-gray-800 dark:text-white">${item.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">$${item.price.toFixed(2)}</p>
                <div class="flex items-center mt-1">
                    <button class="quantity-btn decrease w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded" data-id="${item.id}">-</button>
                    <span class="quantity mx-2 text-gray-800 dark:text-white">${item.quantity}</span>
                    <button class="quantity-btn increase w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded" data-id="${item.id}">+</button>
                </div>
            </div>
            <div class="flex flex-col items-end">
                <span class="font-semibold text-gray-800 dark:text-white">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn text-red-500 hover:text-red-700 text-sm mt-2" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(button.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (button.classList.contains('increase')) {
                updateQuantity(productId, item.quantity + 1);
            } else if (button.classList.contains('decrease')) {
                updateQuantity(productId, item.quantity - 1);
            }
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(button.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${productName} added to cart</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('animate-fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartPanel.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeCart();
});

cartOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    closeCart();
});

function closeCart() {
    cartPanel.classList.add('hidden');
    cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    alert('Checkout functionality would be implemented here!');
});

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark);
});

function loadThemePreference() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme === 'true' || (savedTheme === null && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
}

const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
}