import { IFolderController } from "./IFolderController";

import { Response, Request } from "express";
import UserRepository from "../../repositories/implemetations/UserRepository";

import FolderRepository from "../../repositories/implemetations/FolderRepository";

class FolderController implements IFolderController {
  async index(request: Request, response: Response) {
    try {
      const folders = await FolderRepository.findNotes(request.user._id);
      response.status(201).json({ folders });
    } catch (error) {
      response.status(400).send({ message: "Este usuário não possui notas", error });
      return;
    }
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

  /*




  update() {
    //cria
  }


*/

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const folderExists = await FolderRepository.findById(id);
      console.log(folderExists)
      if (!folderExists) {
        response.status(400).send({ message: "Folder not Exists" });
        return;
      }

      await FolderRepository.delete(id);
      response.status(204).json(folderExists);

    } catch (error) {
      response.status(400).send({ message: "Internal server error", error });
      return;
    }
  }

  async store(request: Request, response: Response) {
    const { title } = request.body;

    const folderAlreadyExists = await FolderRepository.findByTitle(title);

    if (folderAlreadyExists === []) {
      response
        .status(400)
        .send({ message: `A folder with the name ${title}, already exists` });
      return;
    }

    try {
      const folder = await FolderRepository.save({
        title,
        Owner: request.user._id,
      });

      response.status(201).json({ folder });
    } catch (error) {
      response.status(400).send({ message: "Internal server error", error });
      return;
    }
  }
}

export = new FolderController();
