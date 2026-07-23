const router = require("express").Router();

const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/checkout.controller");

router.use(auth);

router.post(
    "/",
    controller.checkout
);

router.get(
    "/orders",
    controller.getOrders
);

router.get(
    "/orders/:id",
    controller.getOrder
);

module.exports = router;