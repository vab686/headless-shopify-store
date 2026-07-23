const Cart = require("../models/Cart");

const getUserCart = async (userId) => {

    let cart = await Cart.findOne({
        user: userId
    });

    if (!cart) {
        cart = await Cart.create({
            user: userId,
            items: []
        });
    }

    return cart;
};

const addToCart = async (userId, item) => {

    const cart = await getUserCart(userId);

    const index = cart.items.findIndex(product => {
        return product.variantId === item.variantId;
    });

    if (index > -1) {
        cart.items[index].quantity += item.quantity;
    } else {
        cart.items.push(item);
    }

    await cart.save();

    return cart;
};

const updateCartItem = async (userId, variantId, quantity) => {

    const cart = await getUserCart(userId);

    const item = cart.items.find(product => {
        return product.variantId === variantId;
    });

    if (!item) {
        throw new Error("Item not found");
    }

    item.quantity = quantity;

    await cart.save();

    return cart;
};

const removeCartItem = async (userId, variantId) => {

    const cart = await getUserCart(userId);

    cart.items = cart.items.filter(item => {
        return item.variantId !== variantId;
    });

    await cart.save();

    return cart;
};

const clearCart = async (userId) => {

    const cart = await getUserCart(userId);

    cart.items = [];

    await cart.save();

    return cart;
};

module.exports = {
    getUserCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart
};