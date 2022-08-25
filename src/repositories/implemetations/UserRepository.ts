import { UserScheema } from "../../Models/UserModel";
import { IUsersRepository } from "../IUsersRepository";
import { IUser } from "../../entities/IUser";

class UsersRepository implements IUsersRepository {
  async save(user: IUser) {
    const User = new UserScheema(user);
    const newUser = await User.save();
    return newUser;
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await UserScheema.findOne({ email: email });
    return user;
  }
  async findAll(): Promise<IUser[]> {
    const user = await UserScheema.find({});
    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = await UserScheema.findById({ _id: id });
    return user;
  }

  async delete(id: string): Promise<void> {
    await UserScheema.deleteOne({ id });
  }

  async login(user: IUser): Promise<IUser> {
    const { password, email } = user;
    return user;
  }
}

export = new UsersRepository();
