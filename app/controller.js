exports.healthHandler = async (_req, res, next) => {
  try {
    res.status(200).json({ message: "API is successfully worked." });
  } catch (error) {
    error.status = 501;
    error.message = `Health route doesn't work properly.`;
    next(error);
  }
};

exports.homeHandler = async (_req, res, next) => {
  try {
    res.status(200).redirect("/api/v1/questions");
  } catch (error) {
    error.status = 501;
    error.message = `There is an error in home route`;
    next(error);
  }
};
