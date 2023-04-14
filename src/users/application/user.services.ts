import { IUserRepository } from '../domain/interface/IUser';
import { User } from '../domain/User';

export class UserService {
  private productRepository: IUserRepository;

  constructor(productRepository: IUserRepository){
    this.productRepository = productRepository;
  }

  public async createUser(name: string, email: string, phoneNumber: string[], status?: "Happy" | "Sad"): Promise<User> {
    const user: User = new User(email, name, phoneNumber, status??"Happy");
    return await this.productRepository.create(user);
  };

  public async get(id: string): Promise<User> {
    return await this.productRepository.get(id);
  }
}
