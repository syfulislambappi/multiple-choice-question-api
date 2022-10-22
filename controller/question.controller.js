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
    error.message = `Can't get the id in the database.`;
    next(error);
  }
};

exports.updateQuestionById = async (req, res, next) => {
  try {
    const { questionId } = req.params;
    const { title, options, answer } = req.body;
    quesitonDb.updateById(questionId, title, options, answer);
    res.status(200).json({ message: "Data is updated successfully." });
  } catch (error) {
    error.status = 501;
    error.message = `Can't get the id in the database.`;
    next(error);
  }
};

exports.deleteQuesitonById = async (req, res, next) => {
  try {
    const { questionId } = req.params;
    quesitonDb.deleteById(questionId);
    res.status(200).json({ message: "Data is deleted successfully." });
  } catch (error) {
    error.status = 501;
    error.message = `Can't get the id from the database.`;
    next(error);
  }
};

exports.getQuesitonsByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const quesitons = await quesitonDb.findByUsername(username);
    res.status(200).json(quesitons);
  } catch (error) {
    error.status = 501;
    error.message = `Can't find data with the username.`;
    next(error);
  }
};

exports.deleteQuesitonByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const message = quesitonDb.deleteByUsername(username);
    res.status(200).json({ message: message });
  } catch (error) {
    error.status = 501;
    error.message = `Can't deleted data with the username.`;
    next(error);
  }
};
