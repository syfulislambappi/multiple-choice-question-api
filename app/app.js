require("dotenv").config();
const express = require("express");
const { notFoundHandler, applicationErrorHandler } = require("./error");

const app = express();

app.use(require("./middleware"));
app.use(require("./routes"));

app.use(notFoundHandler);
app.use(applicationErrorHandler);

module.exports = app;
