import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './create-users.dto';
import { UpdateUserDto } from './update-users.dto';
import { User } from './users.entity.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async getAllUser(): Promise<User[]> {
    return await User.find({});
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
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
    } = createUserDto;
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

  public async getUserById(id: number): Promise<User> {
    return await this.findOne(id);
  }

  public async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
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
    } = updateUserDto;
    const user = await this.findOne(id);
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
