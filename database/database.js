const path = require("path");
const Question = require("../models/Question");
const readData = require("../util/readData");
const dataPath = path.join(__dirname, "data.json");
console.log(dataPath);

class QuestionDb {
  find() {
    return readData(dataPath);
  }
}

const quesitonDb = new QuestionDb();

module.exports = quesitonDb;
