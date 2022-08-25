import mongoose from "mongoose";


import { IFolder } from "../entities/IFolder";


export interface IFolderRepository {
  //findByEmail(email: string): Promise<IFolder>;
  findById(id:string): Promise<Object>;
  findByTitle(id:string): Promise<Object>;
  findNotes(id:string): Promise<Object>;

   save(folder: IFolder): Promise<Object>

  //login(user: IFolder): Promise<IFolder>;
  //findAll(): Promise<IFolder[]>;
  delete(id:string): Promise<void>;

}
