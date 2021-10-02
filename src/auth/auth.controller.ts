import { Controller, Post, Request } from '@nestjs/common';
import { User } from 'src/users/dto/users.entity.dto';
import { AuthService } from './auth.service';
import { LoginUsersDto } from './dto/login-users.dto';
import { RegisterUsersDto } from './dto/register-users.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  public async login(
    @Request() res,
    loginUsersDto: LoginUsersDto,
  ): Promise<User> {
    const user = await this.authService.login(loginUsersDto);
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }

  @Post('/register')
  public async register(
    @Request() res,
    registerUsersDto: RegisterUsersDto,
  ): Promise<User> {
    const user = await this.authService.register(registerUsersDto);
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }
}
