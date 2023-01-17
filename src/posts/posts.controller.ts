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
  getPostAll(): PostInfo {
    return this.postsService.getPostAll();
  }

  @Get('/:id')
  getPostInfo(@Param('id') postId: number): PostInfo {
    return this.postsService.getPostInfo(postId);
  }

  @Post()
  createPost(@Body() dto: createPostDto): void {
    return this.postsService.createPost(dto);
  }

  @Patch('/:id')
  updatePost(
    @Param('id') postId: number,
    @Body('content') content: string,
  ): void {
    return this.postsService.updatePost(postId, content);
  }

  @Delete('/:id')
  deletePost(@Param('id') postId: number): void {
    return this.postsService.deletePost(postId);
  }
}

//굳이 컨트롤러에도 라우터에 따른 메소드명을 작성하는 이유가 보기 좋으라고 하는 건가요..?
