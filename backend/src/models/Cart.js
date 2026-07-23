const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    variantId: {
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
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
}, { _id: false });

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    items: {
        type: [cartItemSchema],
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Cart", cartSchema);