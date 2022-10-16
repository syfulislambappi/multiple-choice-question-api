const { healthHandler, homeHandler } = require("./controller");

const router = require("express").Router();

router.get("/", homeHandler);
router.get("/health", healthHandler);

module.exports = router;
