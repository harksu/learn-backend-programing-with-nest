import { Injectable } from '@nestjs/common';
import { PostInfo } from './post-info';
import { createPostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  getPostAll(): PostInfo {
    console.log('데이터베이스에 있는 모든 게시물의 정보를 반환합니다');
    return;
  }

  getPostInfo(postId: number): PostInfo {
    console.log(
      `데이터베이스에 있는 특정 id$${postId}를 가진 게시물의 정보를 반환합니다`,
    );
    return;
  }

  createPost(dto: createPostDto): void {
    console.log(`게시물을 생성합니다${dto}`);
    return;
  }

  updatePost(postId: number, content: string): void {
    console.log(
      `데이터베이스에 있는 특정 id${postId}를 가진 게시물의 정보를 변경합니다 ${postId} : ${content}`,
    );
    return;
  }

  deletePost(postId: number): void {
    console.log(
      `데이터베이스에 있는 특정 id${postId}를 가진 게시물의 정보를 삭제합니다`,
    );
    return;
  }
}
