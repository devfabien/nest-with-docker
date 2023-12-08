import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { userRoles } from '../roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  roles: userRoles;
}
