export const getCart = () => {
    if (typeof window === 'undefined') return [];
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        return [];
    }
};

export const addToCart = (product, quantity = 1) => {
    try {
        const cart = getCart();
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex > -1) {
            // If item already exists, update its quantity
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add new item with quantity
            cart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
};

export const removeFromCart = (productId) => {
    try {
        const cart = getCart();
        const updatedCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
        console.error('Error removing from cart:', error);
    }
};

export const updateCartQuantity = (productId, quantity) => {
    try {
        const cart = getCart();
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    } catch (error) {
        console.error('Error updating cart quantity:', error);
    }
};
