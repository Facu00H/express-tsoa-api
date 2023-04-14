export interface IUser {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
};

export interface IUserRepository {
  get(id: number): IUser;
  create(user: IUser): IUser;
}
