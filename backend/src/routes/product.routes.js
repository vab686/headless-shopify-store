const router = require("express").Router();

const controller = require("../controllers/product.controller");

router.get("/", controller.getProducts);

router.get("/search", controller.searchProducts);

router.get("/category/:handle", controller.getProductsByCollection);

router.get("/:handle", controller.getProduct);

module.exports = router;