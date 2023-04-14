import { IUser } from "./interface/IUser";
import { v4 as uuidv4 } from 'uuid';

export class User implements IUser{
  id: string;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];

  constructor(email: string, name: string, phoneNumbers: string[], status?: "Happy" | "Sad") {
    this.id = uuidv4();
    this.email = email;
    this.name = name;
    this.status = status;
    this.phoneNumbers = phoneNumbers;
  }
}
