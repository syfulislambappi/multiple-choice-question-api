const {
  getAllQuestions,
  createQuestion,
} = require("../controller/question.controller");

const router = require("express").Router();

router.get("/", getAllQuestions);
router.post("/create", createQuestion);

module.exports = router;
