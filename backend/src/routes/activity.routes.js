const router = require("express").Router();

const auth = require("../middleware/auth.middleware");

const controller = require("../controllers/activity.controller");

router.use(auth);

router.get(
    "/history",
    controller.getHistory
);

router.get(
    "/summary",
    controller.getSummary
);

module.exports = router;