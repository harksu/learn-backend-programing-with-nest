import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmailService } from './email/email.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class AppModule {}
