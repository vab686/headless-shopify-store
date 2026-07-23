const router = require("express").Router();

const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");
const wishlistRoutes = require("./wishlist.routes");
const activityRoutes = require("./activity.routes");
const checkoutRoutes = require("./checkout.routes");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Shopify Headless Backend API"
    });
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/activity", activityRoutes);
router.use("/checkout", checkoutRoutes);

module.exports = router;