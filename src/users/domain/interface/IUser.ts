import { User } from '../User'

export interface IUser {
  readonly id: string;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
};

export type IEditUser = Omit<Partial<IUser>, 'id'>

export interface IUserRepository {
  get(id: string): Promise<User>;
  create(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  update(id: string, user: IEditUser): Promise<User>;
}
