import express from "express";
import morgan from "morgan";
import { router } from "./routes";
import "./config/index";
require("express-async-errors");

import { NextFunction, Response, Request, ErrorRequestHandler } from "express";

const port = process.env.PORT || 3001;
const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(router);

app.use(
  (
    error: ErrorRequestHandler,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    response.sendStatus(500);
  }
);

export { app, port };
