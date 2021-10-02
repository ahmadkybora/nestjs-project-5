import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Response,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { User } from './dto/users.entity.dto';
import { UsersService } from './users.service';

@Controller('api/panel/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async getAllUser(@Response() res): Promise<User[]> {
    const user = await this.usersService.getAllUser();
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }

  @Post()
  public async createUser(
    @Body() createdUserDto: CreateUserDto,
  ): Promise<User> {
    return await this.usersService.createUser(createdUserDto);
  }

  @Get('/:id')
  public async getUserById(
    @Response() res,
    @Param() id: number,
  ): Promise<User> {
    const user = await this.usersService.getUserById(id);
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }

  @Patch('/users/:id')
  public async updateUser(
    @Response() res,
    @Param() id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.usersService.updateUser(id, updateUserDto);
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }
}
