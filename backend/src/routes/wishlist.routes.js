const router = require("express").Router();

const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/wishlist.controller");

router.use(auth);

router.get(
    "/",
    controller.getWishlist
);

router.post(
    "/",
    controller.addToWishlist
);

router.delete(
    "/:productId",
    controller.removeFromWishlist
);

module.exports = router;