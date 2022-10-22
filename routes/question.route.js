const {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestionById,
  deleteQuesitonById,
  getQuesitonsByUsername,
  deleteQuesitonByUsername,
} = require("../controller/question.controller");

const router = require("express").Router();

router.get("/", getAllQuestions);
router.post("/create", createQuestion);

router
  .route("/q/:questionId")
  .get(getQuestionById)
  .patch(updateQuestionById)
  .delete(deleteQuesitonById);

router
  .route("/u/:username")
  .get(getQuesitonsByUsername)
  .delete(deleteQuesitonByUsername);

module.exports = router;
