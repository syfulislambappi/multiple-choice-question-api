const { promises: fs } = require("fs");
const readData = require("./readData");

/**
 * Write data on database
 * @param {string} path
 * @param {object} quesitons
 */
const writeData = async (path, question) => {
  try {
    const data = await readData(path);
    const quesitons = JSON.parse(data);
    quesitons.push(question);
    await fs.writeFile(path, JSON.stringify(quesitons));
  } catch (error) {
    error.status = 501;
    return error;
  }
};

module.exports = writeData;
