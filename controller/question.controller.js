const quesitonDb = require("../database/database");

exports.getAllQuestions = async (_req, res, next) => {
  try {
    const quesitons = await quesitonDb.find();

    res.status(200).send(JSON.parse(quesitons));
  } catch (error) {
    error.status = 501;
    error.message = `Can't get data from file`;
    next(error);
  }
};
