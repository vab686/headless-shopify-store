const authService = require("../services/auth.service");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, "Name, email and password are required");
    }

    try {
        const data = await authService.signup({
            name,
            email,
            password
        });

        return res.status(201).json(
            new ApiResponse(
                201,
                "User registered successfully",
                data
            )
        );
    } catch (error) {
        throw new ApiError(400, error.message);
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    try {
        const data = await authService.login({
            email,
            password
        });

        return res.status(200).json(
            new ApiResponse(
                200,
                "Login successful",
                data
            )
        );
    } catch (error) {
        throw new ApiError(401, error.message);
    }
});

const getCurrentUser = asyncHandler(async (req, res) => {
    const user = await authService.getCurrentUser(req.user.userId);

    return res.status(200).json(
        new ApiResponse(
            200,
            "User fetched successfully",
            user
        )
    );
});

module.exports = {
    signup,
    login,
    getCurrentUser
};