const {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestionById,
} = require("../controller/question.controller");

const router = require("express").Router();

router.get("/", getAllQuestions);
router.post("/create", createQuestion);
router.route("/q/:questionId").get(getQuestionById).patch(updateQuestionById);

module.exports = router;
