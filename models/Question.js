const shortid = require("shortid");

class Question {
  /**
   * Create quesiton model
   * @param {string} username
   * @param {string} title
   * @param {Array<string>} options
   * @param {string} answer
   */
  constructor(username, title, options, answer) {
    this.username = username;
    this.questionId = shortid.generate();
    this.title = title;
    this.options = options;
    this.answer = answer;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Question;
