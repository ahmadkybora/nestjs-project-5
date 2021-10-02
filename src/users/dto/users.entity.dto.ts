import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UsersStatusEnum } from './users.status.enum';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column()
  home_phone: string;

  @Column()
  work_phone: string;

  @Column()
  work_address: string;

  @Column()
  home_address: string;

  @Column()
  image: string;

  @Column()
  status: UsersStatusEnum.ACTIVE;
}
