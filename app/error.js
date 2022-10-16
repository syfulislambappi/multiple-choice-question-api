exports.notFoundHandler = (_req, _res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
};

exports.applicationErrorHandler = (err, _req, res, _next) => {
  if (!!err.status) {
    return res.status(err.status).json({ message: err.message });
  } else {
    return res.status(501).json({ message: "Internal Server Error" });
  }
};
