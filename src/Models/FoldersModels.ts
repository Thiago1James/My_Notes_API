import { model, Schema } from "mongoose";

export interface IFolder {
  title: string;
  Owner: Schema.Types.ObjectId;
  Notes:object[]
}

const folderModel = new Schema({
  title: { type: String, required: true },
  Owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Notes: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true },
      created: { type: Date, default: Date.now },
      modified: { type: Date, default: Date.now },
    },
  ],
});
export const FolderSheema = model<IFolder>("Folder", folderModel);
