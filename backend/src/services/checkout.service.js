const Cart = require("../models/Cart");
const Order = require("../models/Order");

const checkout = async (userId, shippingAddress) => {

    const cart = await Cart.findOne({
        user: userId
    });

    if (!cart || cart.items.length === 0) {
        throw new Error("Cart is empty");
    }

    const total = cart.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    const formattedAddress = {
        fullName: shippingAddress?.fullName || "Guest",
        phone: shippingAddress?.phone || "0000000000",
        address: shippingAddress?.address || "Address",
        city: shippingAddress?.city || "City",
        state: shippingAddress?.state || "State",
        country: shippingAddress?.country || "India",
        postalCode: shippingAddress?.postalCode || "000000"
    };

    const order = await Order.create({
        user: userId,
        items: cart.items,
        shippingAddress: formattedAddress,
        total,
        paymentStatus: "PAID",
        orderStatus: "PLACED"
    });

    cart.items = [];

    await cart.save();

    return order;
};

const getOrders = async (userId) => {
    return Order.find({
        user: userId
    }).sort({
        createdAt: -1
    });
};

const getOrderById = async (userId, orderId) => {
    return Order.findOne({
        _id: orderId,
        user: userId
    });
};

module.exports = {
    checkout,
    getOrders,
    getOrderById
};