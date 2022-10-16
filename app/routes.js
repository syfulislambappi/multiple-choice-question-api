const { healthHandler } = require("./controller");

const router = require("express").Router();

router.get("/health", healthHandler);

module.exports = router;
