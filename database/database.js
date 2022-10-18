const path = require("path");
const Question = require("../models/Question");
const readData = require("../util/readData");
const writeData = require("../util/writeData");
const updateData = require("../util/updateData");
const deleteData = require("../util/deleteData");
const dataPath = path.join(__dirname, "data.json");

class QuestionDb {
  /**
   * Find all the questions
   * @returns {Array<Question>}
   */
  find() {
    return readData(dataPath);
  }

  /**
   * Create Question
   * @param {string} username
   * @param {string} title
   * @param {Array<string>} options
   * @param {string} answer
   */
  create(username, title, options, answer) {
    const question = new Question(username, title, options, answer);
    writeData(dataPath, question);
    return question;
  }

  /**
   * Get question by id
   * @param {string} questionId
   * @returns {Object<Question>}
   */
  findById(questionId) {
    readData(dataPath).then((questions) => {
      const parsedQuesiton = JSON.parse(questions);
      const question = parsedQuesiton.find(
        (question) => question.questionId === questionId
      );
      return question;
    });
  }

  /**
   * Update question by question id
   * @param {string} questionId
   * @param {string} title
   * @param {Array<string>} options
   * @param {string} answer
   */
  updateById(questionId, title, options, answer) {
    return updateData(dataPath, title, options, answer, questionId);
  }

  /**
   * Delete quesiton by quesiton id
   * @param {string} questionId
   * @returns {Promise}
   */
  deleteById(questionId) {
    return deleteData(questionId, dataPath);
  }
}

const quesitonDb = new QuestionDb();

module.exports = quesitonDb;
