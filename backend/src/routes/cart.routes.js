const router = require("express").Router();

const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/cart.controller");

router.use(auth);

router.get("/", controller.getCart);

router.post("/", controller.addToCart);

router.put("/:variantId", controller.updateCart);

router.delete("/:variantId", controller.removeCart);

router.delete("/", controller.clearCart);

module.exports = router;