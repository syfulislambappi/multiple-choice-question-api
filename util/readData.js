const { promises: fs } = require("fs");

const readData = async (path) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    return data;
  } catch (error) {
    error.status = 501;
    return error;
  }
};
module.exports = readData;
