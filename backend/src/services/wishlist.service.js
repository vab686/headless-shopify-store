const Wishlist = require("../models/Wishlist");

const getWishlist = async (userId) => {
    return Wishlist.find({
        user: userId
    }).sort({
        createdAt: -1
    });
};

const addToWishlist = async (userId, data) => {

    const exists = await Wishlist.findOne({
        user: userId,
        productId: data.productId
    });

    if (exists) {
        return exists;
    }

    return Wishlist.create({
        user: userId,
        productId: data.productId,
        title: data.title,
        image: data.image,
        price: data.price
    });

};

const removeFromWishlist = async (userId, productId) => {

    await Wishlist.findOneAndDelete({
        user: userId,
        productId
    });

    return true;

};

module.exports = {
    getWishlist,
    addToWishlist,
    removeFromWishlist
};