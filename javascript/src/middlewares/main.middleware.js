const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const routes = require("../routes/main.route");
const { errorHandler } = require("./index");

module.exports = (app) => {
  app.use(morgan("common"));
  app.use(cors());
  app.use(helmet());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routes(app);
  app.use(errorHandler);
};