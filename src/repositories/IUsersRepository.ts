import mongoose from "mongoose";
import { IUser } from "../entities/IUser";

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser>;
  findById(id:string): Promise<IUser>;

  save(user: IUser): Promise<IUser>;

  login(user: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  delete(id:string): Promise<void>;

}
