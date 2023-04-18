import { User } from './../../domain/User';
import { UserService } from "../../application/user.services";
import {
  Body,
  Controller,
  Post,
  Route,
  Get,
  Query,
  Put,
  Path,
  Delete
} from "tsoa";
import { UserRepositoryMongo } from "../../infraestructure/userMongooseRepository";
import { IUserRepository } from 'src/users/domain/interface/IUser';

@Route('user')
export class OrderController extends Controller implements IUserRepository{
  private readonly userService: UserService;

  constructor() {
    super();
    const orderRepository = new UserRepositoryMongo();
    this.userService = new UserService(orderRepository)
  }

  @Post() 
  public async create(
    @Body() requestBody: {
      email: string;
      name: string;
      status?: "Happy" | "Sad";
      phoneNumbers: string[];
    } ): Promise<User> {
      const {email, name, status, phoneNumbers} = requestBody;
      return await this.userService.createUser(name, email, phoneNumbers, status);
  }

  @Get() 
  public async get( @Query('id') paramValue: string ): Promise<User> {
      return await this.userService.get(paramValue);
  }

  @Get('/getAll')
  public async getAll(): Promise<User[]> {
      return await this.userService.getAll();
  }

  @Put('/updateUser/{userId}')
  public async update(
    @Path() userId: string,
    @Body() requestBody: {
      email: string;
      name: string;
      status?: "Happy" | "Sad";
    } ): Promise<User> {
      const { email, name, status } = requestBody;
      return await this.userService.update(userId, { email, name, status });
  }

  @Delete('/deleteUser/{userId}')
  public async delete(
    @Path() userId: string ): Promise<string> {
      const id = await this.userService.delete(userId);
      return `Collection with id: ${id} has deleted`;
    }
}