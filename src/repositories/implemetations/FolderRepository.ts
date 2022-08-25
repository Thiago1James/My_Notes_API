import { IFolder } from "../../entities/IFolder";
import { IFolderRepository } from "../IFolderRepository";
import { FolderSheema } from "../../Models/FoldersModels";
import { Types } from "mongoose";

class FolderRepository implements IFolderRepository {
  async save(folder: IFolder) {
    const Folder = new FolderSheema(folder);
    const newfolder = await Folder.save();
    return newfolder;
  }

  async findNotes(id: string) {
    const folder = await FolderSheema.find({ Owner: id });
    return folder;
  }

  async findById(id: string) {
    const folder = await FolderSheema.findById({ _id: id });
    return folder;
  }
  async findByTitle(title: string) {
    const folder = await FolderSheema.find({ title });
    return folder;
  }
  /*
  async findByEmail(email: string): Promise<IUser> {
    const user = await UserScheema.findOne({ email: email });
    return user;
  }
  async findAll(): Promise<IUser[]> {
    const user = await UserScheema.find({});
    return user;
  }





  async login(user: IUser): Promise<IUser> {
    const { password, email } = user;
    return user;
  }
  */

  async delete(id: string): Promise<void> {
    console.log(await FolderSheema.deleteOne({ id }));

    await FolderSheema.deleteOne({ id });
  }
}

export = new FolderRepository();
