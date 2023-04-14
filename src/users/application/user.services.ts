import { IUserRepository } from './../domain/interface/IUser';
import { IUser } from "../domain/interface/IUser";

// A post request should not contain an id.
export type UserCreationParams = Pick<IUser, "email" | "name" | "phoneNumbers">;

export class UsersService implements IUserRepository {
  public get(id: number, name?: string): IUser {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): IUser {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
};
