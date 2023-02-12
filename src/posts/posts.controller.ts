import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { createPostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { PostInfo } from './post-info';
import { AuthGuard } from 'src/auth.guard';
import { Headers } from '@nestjs/common';

@Controller('/posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPostAll(): PostInfo[] | string {
    return this.postsService.getPostAll();
  }

  @Get('/:id')
  getPostInfo(@Param('id') postId: string): PostInfo | string {
    return this.postsService.getPostInfo(postId);
  }

  @UseGuards(AuthGuard)
  @Post()
  async createPost(
    @Headers() headers: any,
    @Body() dto: createPostDto,
  ): Promise<void> {
    return this.postsService.createPost(dto);
  }

  @Patch('/:id')
  updatePost(
    @Param('id') postId: string,
    @Body('content') content: string,
  ): void {
    return this.postsService.updatePost(postId, content);
  }

  @Delete('/:id')
  deletePost(@Param('id') postId: string): void {
    return this.postsService.deletePost(postId);
  }
}
