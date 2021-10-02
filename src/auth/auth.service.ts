import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/dto/users.entity.dto';
import { AuthRepository } from './dto/auth.repository.dto';
import { LoginUsersDto } from './dto/login-users.dto';
import { RegisterUsersDto } from './dto/register-users.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,
  ) {}

  public async login(loginUsersDto: LoginUsersDto): Promise<User> {
    return await this.authRepository.login(loginUsersDto);
  }

  public async register(registerUsersDto: RegisterUsersDto): Promise<User> {
    return await this.authRepository.register(registerUsersDto);
  }
}
