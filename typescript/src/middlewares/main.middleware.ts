import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import routes from "../routes/main.route";
import { errorHandler } from "./";

export default (app: Application) => {
  app.use(morgan("common"));
  app.use(cors());
  app.use(helmet());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routes(app);
  app.use(errorHandler);
};