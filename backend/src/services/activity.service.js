const Activity = require("../models/Activity");

const track = async (userId, type, metadata = {}) => {

    return Activity.create({
        user: userId,
        type,
        metadata
    });

};

const getHistory = async (userId) => {

    return Activity.find({
        user: userId
    })
        .sort({
            createdAt: -1
        });

}

const getSummary = async (userId) => {

    const activities = await Activity.find({ user: userId });

    const summary = {
        productViews: 0,
        cartActions: 0,
        wishlistActions: 0,
        orders: 0
    };

    activities.forEach(item => {
        const type = item.type;
        if (type === "PRODUCT_VIEW") {
            summary.productViews++;
        } else if (type === "ADD_TO_CART" || type === "REMOVE_FROM_CART") {
            summary.cartActions++;
        } else if (type === "ADD_TO_WISHLIST" || type === "REMOVE_FROM_WISHLIST") {
            summary.wishlistActions++;
        } else if (type === "ORDER_COMPLETED" || type === "CHECKOUT_INITIATED") {
            summary.orders++;
        }
    });

    return summary;

}

module.exports = {
    track,
    getHistory,
    getSummary
};