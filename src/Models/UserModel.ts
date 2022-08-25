import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

 interface IUser {
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

const userScheema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

userScheema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      next(error);
    }
  }
});

export const UserScheema = model<IUser>("User", userScheema);
