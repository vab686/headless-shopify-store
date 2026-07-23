const mongoose = require("mongoose");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const activityService = require("../services/activity.service");

exports.getHistory = asyncHandler(async (req, res) => {

    const history = await activityService.getHistory(
        req.user._id
    );

    res.json(
        new ApiResponse(
            200,
            "Activity history fetched successfully",
            history
        )
    );

});

exports.getSummary = asyncHandler(async (req, res) => {

    const summary = await activityService.getSummary(
        new mongoose.Types.ObjectId(req.user._id)
    );

    res.json(
        new ApiResponse(
            200,
            "Activity summary fetched successfully",
            summary
        )
    );

});