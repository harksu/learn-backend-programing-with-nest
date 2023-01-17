import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { userLoginDto } from './dtos/user-login.dto';
import { VerifyEmailDto } from './dtos/verify-user.dto';
import { UserInfo } from './user-info';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: userLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
