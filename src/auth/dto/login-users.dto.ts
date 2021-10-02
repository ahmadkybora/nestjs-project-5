import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginUsersDto {
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(25)
  password: string;
}
