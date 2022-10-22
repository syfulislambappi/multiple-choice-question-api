const path = require("path");
const Question = require("../models/Question");
const readData = require("../util/readData");
const writeData = require("../util/writeData");
const updateData = require("../util/updateData");
const deleteData = require("../util/deleteData");
const deleteManyData = require("../util/deleteManyData");
const dataPath = path.join(__dirname, "data.json");

class QuestionDb {
  /**
   * Find all the questions
   * @returns {Array<Question>} Questions
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
   * @returns {object} Object
   */
  create(username, title, options, answer) {
    const question = new Question(username, title, options, answer);
    writeData(dataPath, question);
    return question;
  }

  /**
   * Get question by id
   * @param {string} questionId
   * @returns {Object<Question>} Object
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
   * @returns {Promise} Promise
   */
  updateById(questionId, title, options, answer) {
    return updateData(dataPath, title, options, answer, questionId);
  }

  /**
   * Delete quesiton by quesiton id
   * @param {string} questionId
   * @returns {Promise} Promise
   */
  deleteById(questionId) {
    return deleteData(questionId, dataPath);
  }

  /**
   * Find quesiton by username
   * @param {string} username
   * @returns {Array} result
   */
  async findByUsername(username) {
    try {
      const quesitons = await readData(dataPath);
      const parsedQuesiton = JSON.parse(quesitons);
      const result = parsedQuesiton.filter(
        (quesiton) => quesiton.username === username
      );
      return result;
    } catch (error) {
      return error;
    }
  }

  /**
   * Delete question by username
   * @param {string} username
   * @returns {string} string
   */
  deleteByUsername(username) {
    deleteManyData(dataPath, username);
    return "Questions are deleted successfully.";
  }
}

const quesitonDb = new QuestionDb();

module.exports = quesitonDb;
