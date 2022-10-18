const {
  getAllQuestions,
  createQuestion,
  getQuestionById,
} = require("../controller/question.controller");

const router = require("express").Router();

router.get("/", getAllQuestions);
router.post("/create", createQuestion);
router.route("/q/:questionId").get(getQuestionById);

module.exports = router;
