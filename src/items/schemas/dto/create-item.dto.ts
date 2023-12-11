// import { User } from 'src/users/schemas/user.entity';

export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly quantity: number;
  readonly userId?: string;
}
