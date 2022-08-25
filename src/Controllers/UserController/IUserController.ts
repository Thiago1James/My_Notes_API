import { IUser } from "../../entities/IUser";
import { Response, Request } from "express";

export interface IUsersController {
  index(request: Request, response: Response): Promise<void>;
  show(request: Request, response: Response): Promise<void>;
  store(request: Request, response: Response): Promise<void>;
  update?(): Promise<IUser>;
  login(request: Request, response: Response): Promise<void>;

  delete(request: Request, response: Response): Promise<void>;
}
