const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const cartService = require("../services/cart.service");

exports.getCart = asyncHandler(async (req, res) => {

    const cart = await cartService.getUserCart(req.user._id);

    res.json(
        new ApiResponse(
            200,
            "Cart fetched successfully",
            cart
        )
    );

});

exports.addToCart = asyncHandler(async (req, res) => {

    const cart = await cartService.addToCart(
        req.user._id,
        req.body
    );

    res.json(
        new ApiResponse(
            200,
            "Item added to cart",
            cart
        )
    );

});

exports.updateCart = asyncHandler(async (req, res) => {

    const cart = await cartService.updateCartItem(
        req.user._id,
        decodeURIComponent(req.params.variantId),
        req.body.quantity
    );

    res.json(
        new ApiResponse(
            200,
            "Cart updated",
            cart
        )
    );

});

exports.removeCart = asyncHandler(async (req, res) => {

    const cart = await cartService.removeCartItem(
        req.user._id,
        decodeURIComponent(req.params.variantId)
    );

    res.json(
        new ApiResponse(
            200,
            "Item removed from cart",
            cart
        )
    );

});

exports.clearCart = asyncHandler(async (req, res) => {

    const cart = await cartService.clearCart(
        req.user._id
    );

    res.json(
        new ApiResponse(
            200,
            "Cart cleared",
            cart
        )
    );

});