const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const authenticate = asyncHandler(async (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        throw new ApiError(401, "Unauthorized");
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const id = decoded.userId || decoded._id || decoded.id;
        req.user = {
            ...decoded,
            _id: id,
            userId: id,
            id: id
        };

        next();
    } catch (error) {
        throw new ApiError(401, "Invalid or expired token");
    }
});

module.exports = authenticate;
module.exports.authenticate = authenticate;