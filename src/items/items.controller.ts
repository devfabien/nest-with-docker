import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CreateItemDto } from './schemas/dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Get()
  async getAllUsers() {
    return this.itemService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  async createUser(
    @Body() item: CreateItemDto,
    @Req() req: any,
  ): Promise<Item> {
    const user = req.user;
    return this.itemService.create(user, item);
  }

  @Patch(':id')
  async updateUSer(
    @Param('id') id: string,
    @Body() item: Item,
  ): Promise<UpdateResult> {
    return this.itemService.update(id, item);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.itemService.remove(id);
  }
}
