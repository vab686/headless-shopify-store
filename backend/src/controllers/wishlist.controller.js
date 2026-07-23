const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const wishlistService = require("../services/wishlist.service");

exports.getWishlist = asyncHandler(async (req, res) => {

    const wishlist = await wishlistService.getWishlist(
        req.user._id
    );

    res.json(
        new ApiResponse(
            200,
            "Wishlist fetched successfully",
            wishlist
        )
    );

});

exports.addToWishlist = asyncHandler(async (req, res) => {

    const wishlist = await wishlistService.addToWishlist(
        req.user._id,
        req.body
    );

    res.json(
        new ApiResponse(
            200,
            "Product added to wishlist",
            wishlist
        )
    );

});

exports.removeFromWishlist = asyncHandler(async (req, res) => {

    await wishlistService.removeFromWishlist(
        req.user._id,
        req.params.productId
    );

    res.json(
        new ApiResponse(
            200,
            "Product removed from wishlist"
        )
    );

});