const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const productService = require("../services/product.service");

exports.getProducts = asyncHandler(async (req, res) => {

    const products = await productService.getProducts();

    res.json(
        new ApiResponse(
            200,
            "Products fetched successfully",
            products
        )
    );

});

exports.getProduct = asyncHandler(async (req, res) => {

    const product = await productService.getProductByHandle(
        req.params.handle
    );

    res.json(
        new ApiResponse(
            200,
            "Product fetched successfully",
            product
        )
    );

});

exports.searchProducts = asyncHandler(async (req, res) => {

    const products = await productService.searchProducts(
        req.query.q
    );

    res.json(
        new ApiResponse(
            200,
            "Products fetched successfully",
            products
        )
    );

});

exports.getProductsByCollection = asyncHandler(async (req, res) => {

    const products = await productService.getProductsByCollection(
        req.params.handle
    );

    res.json(
        new ApiResponse(
            200,
            "Products fetched successfully",
            products
        )
    );

});