import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [PostsModule, UsersModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
