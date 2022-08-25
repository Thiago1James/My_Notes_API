import { IUsersController } from "./IUserController";
import { Response, Request } from "express";
import UserRepository from "../../repositories/implemetations/UserRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();
const { JWT_TOKEN } = process.env;

class UserController implements IUsersController {
  async index(request: Request, response: Response) {
    const user = await UserRepository.findAll();
    response.status(201).json(user);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const user = await UserRepository.findById(id);
    if (!user) {
      response.status(400).send({ message: "User not Exists" });
      return;
    }

    response.status(204).json({ user });
  }

  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const userExists = await UserRepository.findByEmail(email);

    if (!userExists) {
      response.status(400).send({ message: "User not Exists" });
      return;
    }

    const isEqual = await bcrypt.compare(password, userExists.password);

    if (!isEqual) {
      response
        .status(400)
        .send({
          message: "User not Exists,plase verify your password or email",
        });
      return;
    } else {
      const token = jwt.sign({ email: email }, JWT_TOKEN, { expiresIn: "24h" });
      response.status(200).send({ token, user: userExists });
    }
  }

  /*




  update() {
    //cria
  }


*/

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userExists = await UserRepository.findById(id);

    if (!userExists) {
      response.status(400).send({ message: "User not Exists" });
      return;
    }

    const DeletedUser = await UserRepository.delete(id);
    response.status(204).json(DeletedUser);
  }

  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userAlreadyExists = await UserRepository.findByEmail(email);

    if (userAlreadyExists) {
      response.status(400).send({ message: "User already Exists" });
      return;
    }

    try {
      const user = await UserRepository.save({
        name,
        email,
        password,
      });

      response.status(201).json({ user });
    } catch (error) {
      response.status(400).send({ message: "Internal server error", error });
      return;
    }
  }
}

export = new UserController();
