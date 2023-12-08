import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Patch(':id')
  async updateUSer(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<UpdateResult> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.usersService.remove(id);
  }
}
