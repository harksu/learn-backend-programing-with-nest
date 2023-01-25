import { Module } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class UsersModule {}
