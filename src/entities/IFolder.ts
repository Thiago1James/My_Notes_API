import mongoose from "mongoose";

export interface IFolder {
  title: string;
  Owner: mongoose.Types.ObjectId;
}
