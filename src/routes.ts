import { Router } from "express";
import FolderController from "./Controllers/FolderController";
import UserController from "./Controllers/UserController";
import { WithAuth } from "./middlewares/auth";

const router = Router();

router.post("/users/register", UserController.store);
router.delete("/users/delete/:id", UserController.delete);
router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users/login", UserController.login);


///Folder Routes

router.post("/folders", WithAuth,FolderController.store);
router.get("/folders", WithAuth,FolderController.index);
router.delete("/folders/:id", FolderController.delete);




export { router };
