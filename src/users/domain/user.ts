import { IUser } from "./interface/IUser";

export class User implements IUser{
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];

  constructor(id: number, email: string, name: string, phoneNumbers: string[], status?: "Happy" | "Sad") {
    this.id = id;
    this.email = email;
    this.name = name;
    this.status = status;
    this.phoneNumbers = phoneNumbers;
  }
}