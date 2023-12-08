import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.entity';
import { DeleteResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.usersService.remove(id);
  }
}
