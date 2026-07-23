const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
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
        required: true
    }
}, { _id: false });

const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    }
}, { _id: false });

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [orderItemSchema],
        default: []
    },
    shippingAddress: {
        type: addressSchema,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "PAID"],
        default: "PAID"
    },
    orderStatus: {
        type: String,
        enum: ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"],
        default: "PLACED"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);