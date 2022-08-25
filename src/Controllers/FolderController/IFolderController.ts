import { IUser } from "../../entities/IUser";
import { Response, Request } from "express";

export interface IFolderController {
  index(request: Request, response: Response): Promise<void>;
  show(request: Request, response: Response): Promise<void>;
  store(request: Request, response: Response): Promise<void>;
  update?(): Promise<IUser>;

  delete(request: Request, response: Response): Promise<void>;
}
