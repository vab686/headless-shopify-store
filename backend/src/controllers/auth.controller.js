const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    verifyGoogleToken,
    findOrCreateUser
} = require("../services/auth.service");

const {
    generateToken
} = require("../config/jwt");

exports.googleLogin = asyncHandler(async (req, res) => {

    const { token } = req.body;

    const payload = await verifyGoogleToken(token);

    const user = await findOrCreateUser(payload);

    const jwtToken = generateToken(user);

    res.status(200).json(
        new ApiResponse(
            200,
            "Login successful",
            {
                token: jwtToken,
                user
            }
        )
    );
});

exports.getProfile = asyncHandler(async (req, res) => {

    res.status(200).json(
        new ApiResponse(
            200,
            "Profile fetched successfully",
            req.user
        )
    );
});