import { IEditUser, IUserRepository } from "../domain/interface/IUser";
import { User } from "../domain/User";
import { UserModel } from "../../mongo/schemas/UserModel";

export class UserRepositoryMongo implements IUserRepository {
  async create(user: User): Promise<User> {
    const userCollection = await UserModel.findOne({ name: user.name });
    if (userCollection) {
      throw new Error("User already exists");
    }

    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  };

  async get(id: string): Promise<User> {
    const userCollection = await UserModel.findById(id);
    if (!userCollection) {
      throw new Error("User not found");
    }

    return userCollection;
  }

  async getAll(): Promise<User[]> {
    const userCollection = await UserModel.find();
    if (userCollection.length === 0) {
      throw new Error("Users not found");
    }
    return userCollection;
  }

  async update(id: string, user: IEditUser): Promise<User> {
    const { email, name, status } = user;
    const userCollection = await UserModel.findOneAndUpdate({ id }, {
      email,
      name,
      status,
    }, {
      new: true,
    })
    if (!userCollection) {
      throw new Error("User not found");
    }

    return userCollection;
  }

  async delete(id: string): Promise<string> {
    const userCollection = await UserModel.findOneAndDelete({ id: id });
    if (!userCollection) {
      throw new Error("User not found");
    }

    return id;
  }
}