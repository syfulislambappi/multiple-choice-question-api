const fs = require("fs");
const readData = require("./readData");

/**
 * Update data in database
 * @param {string} path
 * @param {string} title
 * @param {Array<string>} options
 * @param {string} answer
 * @param {string} questionId
 */
const updateData = (path, title, options, answer, questionId) => {
  readData(path).then((questions) => {
    const parsedQuesitons = JSON.parse(questions);
    const question = parsedQuesitons.find(
      (question) => question.questionId === questionId
    );
    question.title = title || question.title;
    question.options = options || question.options;
    question.answer = answer || question.answer;
    question.updatedAt = new Date();
    fs.writeFile(path, JSON.stringify(parsedQuesitons), (err) => {
      console.log("Data is updated successfully.");
    });
  });
};

module.exports = updateData;
