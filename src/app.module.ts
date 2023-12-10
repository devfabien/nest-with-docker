import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/schemas/user.entity';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
