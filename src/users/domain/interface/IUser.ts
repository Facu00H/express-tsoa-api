import { User } from '../User'

export interface IUser {
  id: string;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
};

export interface IUserRepository {
  get(id: string): Promise<User>;
  create(user: User): Promise<User>;
}
