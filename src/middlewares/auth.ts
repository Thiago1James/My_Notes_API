import jwt from "jsonwebtoken";
import { UserScheema } from "../Models/UserModel";
require("dotenv").config();
import { Request, Response, NextFunction } from "express";
const { JWT_TOKEN } = process.env;

export const WithAuth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers["x-access-token"];

  if (!token) {
    return response.status(401).send({ message: "Não autorizado" });
  }

  try {
    const Decoded = jwt.verify(token.toString(), JWT_TOKEN);

    UserScheema.findOne({ email: Decoded["email"] })
      .then((user: any) => {
        request.user = user;
        next();
      })
      .catch((error) =>
        response.status(401).send({ message: "Não autorizado" })
      );
  } catch (error) {
    return response.status(401).send({ message: "Não autorizado" });
  }
};
