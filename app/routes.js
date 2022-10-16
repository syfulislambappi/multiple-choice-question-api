const { healthHandler, homeHandler } = require("./controller");

const router = require("express").Router();

router.use("/api/v1/questions", require("../routes/question.route"));
router.get("/health", healthHandler);
router.get("/", homeHandler);

module.exports = router;
