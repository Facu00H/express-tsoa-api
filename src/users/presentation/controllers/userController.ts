import { User } from './../../domain/User';
import { UserService } from "../../application/user.services";
import { Body, Controller, Post, Route, Get, Query } from "tsoa";
import { UserRepositoryMongo } from "../../infraestructure/userMongooseRepository";

@Route('user')
export class OrderController extends Controller {
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
}