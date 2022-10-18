const quesitonDb = require("../database/database");

exports.getAllQuestions = async (_req, res, next) => {
  try {
    const quesitons = await quesitonDb.find();
    res.status(200).send(JSON.parse(quesitons));
  } catch (error) {
    error.status = 501;
    error.message = `Can't get data from database`;
    next(error);
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    const { username, title, options, answer } = req.body;
    const question = quesitonDb.create(username, title, options, answer);
    res.status(200).json(question);
  } catch (error) {
    error.status = 501;
    error.message = `Can't create data in the database`;
    next(error);
  }
};

exports.getQuestionById = async (req, res, next) => {
  try {
    const { questionId } = req.params;
    const questions = await quesitonDb.find();
    const question = JSON.parse(questions).find(
      (question) => question.questionId === questionId
    );
    res.status(200).json(question);
  } catch (error) {
    error.status = 501;
    error.message = `Can't find question with the id`;
    next(error);
  }
};
