const { promises: fs } = require("fs");

/**
 * Delete Many data from database
 * @param {string} path
 * @param {string} username
 * @returns {none} none
 */
const deleteManyData = async (path, username) => {
  try {
    const readQuesitons = await fs.readFile(path, "utf-8");
    const parsedQuesitons = JSON.parse(readQuesitons);
    const filteredQuestions = parsedQuesitons.filter(
      (question) => question.username === username
    );

    for (let i = 0; i < filteredQuestions.length; i++) {
      const filteredQuestion = filteredQuestions[i].questionId;
      const index = parsedQuesitons.findIndex(
        (value) => value.questionId === filteredQuestion
      );
      if (index === -1) {
        return Error(`Username cannot find from the database.`);
      } else {
        parsedQuesitons.splice(index, 1);
      }
    }
    await fs.writeFile(path, JSON.stringify(parsedQuesitons));
  } catch (error) {
    return error;
  }
};

module.exports = deleteManyData;
