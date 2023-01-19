import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { createPostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { PostInfo } from './post-info';

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

  @Post()
  createPost(@Body() dto: createPostDto): void {
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
