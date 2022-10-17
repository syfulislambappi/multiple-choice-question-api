const path = require("path");
const Question = require("../models/Question");
const readData = require("../util/readData");
const writeData = require("../util/writeData");
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
}

const quesitonDb = new QuestionDb();

module.exports = quesitonDb;
