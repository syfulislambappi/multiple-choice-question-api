const { getAllQuestions } = require("../controller/question.controller");

const router = require("express").Router();

router.get("/", getAllQuestions);

module.exports = router;
