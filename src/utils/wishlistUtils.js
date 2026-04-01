export const getWishlist = () => {
    if (typeof window === 'undefined') return [];
    try {
        const wishlist = localStorage.getItem('wishlist');
        return wishlist ? JSON.parse(wishlist) : [];
    } catch (error) {
        console.error('Error parsing wishlist from localStorage:', error);
        return [];
    }
};

export const isInWishlist = (productId) => {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
};

export const addToWishlist = (product) => {
    try {
        const wishlist = getWishlist();
        if (!wishlist.some(item => item.id === product.id)) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
};

export const removeFromWishlist = (productId) => {
    try {
        const wishlist = getWishlist();
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } catch (error) {
        console.error('Error removing from wishlist:', error);
    }
};

export const toggleWishlist = (product) => {
    const inWishlist = isInWishlist(product.id);
    if (inWishlist) {
        removeFromWishlist(product.id);
        return false; // Returns new state
    } else {
        addToWishlist(product);
        return true; // Returns new state
    }
};
