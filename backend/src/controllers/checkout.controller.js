const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const checkoutService = require("../services/checkout.service");
const activityService = require("../services/activity.service");
const ACTIVITY = require("../utils/activityTypes");

exports.checkout = asyncHandler(async (req, res) => {

    await activityService.track(
        req.user._id,
        ACTIVITY.CHECKOUT_INITIATED
    );

    const order = await checkoutService.checkout(
        req.user._id,
        req.body
    );

    await activityService.track(
        req.user._id,
        ACTIVITY.ORDER_COMPLETED,
        {
            orderId: order._id,
            total: order.total
        }
    );

    res.json(
        new ApiResponse(
            200,
            "Order placed successfully",
            order
        )
    );

});

exports.getOrders = asyncHandler(async (req, res) => {

    const orders = await checkoutService.getOrders(
        req.user._id
    );

    res.json(
        new ApiResponse(
            200,
            "Orders fetched successfully",
            orders
        )
    );

});

exports.getOrder = asyncHandler(async (req, res) => {

    const order = await checkoutService.getOrderById(
        req.user._id,
        req.params.id
    );

    res.json(
        new ApiResponse(
            200,
            "Order fetched successfully",
            order
        )
    );

});