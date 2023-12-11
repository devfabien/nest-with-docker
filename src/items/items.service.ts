import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './schemas/item.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateItemDto } from './schemas/dto/create-item.dto';
import { User } from 'src/users/schemas/user.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: string): Promise<Item | null> {
    return await this.itemRepository.findOneBy({ id });
  }

  async create(user: User, item: CreateItemDto) {
    const newItem = { ...item, userId: user.id };
    return await this.itemRepository.save(newItem);
  }

  async update(id: string, item: Item): Promise<UpdateResult> {
    return await this.itemRepository.update(id, item);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.itemRepository.delete(id);
  }
}
