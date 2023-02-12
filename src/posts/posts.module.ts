import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { UsersModule } from 'src/users/users.module';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([PostEntity, UserEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
