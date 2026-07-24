const ApiError = require("../utils/ApiError");

const validateSignup = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name?.trim()) {
        throw new ApiError(400, "Name is required");
    }

    if (!email?.trim()) {
        throw new ApiError(400, "Email is required");
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new ApiError(400, "Invalid email address");
    }

    if (!password) {
        throw new ApiError(400, "Password is required");
    }

    if (password.length < 6) {
        throw new ApiError(
            400,
            "Password must be at least 6 characters long"
        );
    }

    next();
};

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email?.trim()) {
        throw new ApiError(400, "Email is required");
    }

    if (!password) {
        throw new ApiError(400, "Password is required");
    }

    next();
};

module.exports = {
    validateSignup,
    validateLogin
};