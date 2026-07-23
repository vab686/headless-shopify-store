const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
    "/google",
    authController.googleLogin
);

router.get(
    "/me",
    authMiddleware,
    authController.getProfile
);

module.exports = router;