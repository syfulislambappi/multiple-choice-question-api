const {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestionById,
  deleteQuesitonById,
} = require("../controller/question.controller");

const router = require("express").Router();

router.get("/", getAllQuestions);
router.post("/create", createQuestion);
router
  .route("/q/:questionId")
  .get(getQuestionById)
  .patch(updateQuestionById)
  .delete(deleteQuesitonById);

module.exports = router;
