import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/dto/users.entity.dto';
import { EntityRepository, Repository } from 'typeorm';
import { LoginUsersDto } from './login-users.dto';
import { RegisterUsersDto } from './register-users.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  public async login(loginUsersDto: LoginUsersDto): Promise<User> {
    const { username, password } = loginUsersDto;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('your data is not match');
    }
  }

  public async register(registerUsersDto: RegisterUsersDto): Promise<User> {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      mobile,
      home_phone,
      work_phone,
      home_address,
      work_address,
      image,
    } = registerUsersDto;
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.username = username;
    user.email = email;
    user.password = password;
    user.mobile = mobile;
    user.home_phone = home_phone;
    user.work_phone = work_phone;
    user.home_address = home_address;
    user.work_address = work_address;
    user.image = image;
    await this.save(user);
    return user;
  }
}
