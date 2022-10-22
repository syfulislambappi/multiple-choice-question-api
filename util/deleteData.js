const readData = require("./readData");
const fs = require("fs");

/**
 * Delete quesiton from database
 * @param {string} questionId
 * @param {string} path
 */
const deleteData = (questionId, path) => {
  readData(path).then((questions) => {
    const parsedQuesitons = JSON.parse(questions);
    const index = parsedQuesitons.findIndex(
      (index) => index.questionId === questionId
    );
    if (index === -1) {
      return Error(`Can't find data with the id.`);
    } else {
      parsedQuesitons.splice(index, 1);
      fs.writeFile(path, JSON.stringify(parsedQuesitons), (err) => {
        console.log("Question is deleted successfully.");
      });
    }
  });
};

module.exports = deleteData;
