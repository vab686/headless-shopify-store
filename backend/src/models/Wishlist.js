const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

wishlistSchema.index(
    {
        user: 1,
        productId: 1
    },
    {
        unique: true
    }
);

module.exports = mongoose.model(
    "Wishlist",
    wishlistSchema
);