const { Router } = require("express");
const {
    signup,
    login,
    getCurrentUser
} = require("../controllers/auth.controller");
const { authenticate } = require("../middleware/auth.middleware");
const {
    validateSignup,
    validateLogin
} = require("../validations/auth.validation");

const router = Router();

router.post(
    "/signup",
    validateSignup,
    signup
);

router.post(
    "/login",
    validateLogin,
    login
);

router.get(
    "/me",
    authenticate,
    getCurrentUser
);

module.exports = router;