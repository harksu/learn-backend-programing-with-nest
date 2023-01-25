import { Injectable } from '@nestjs/common';
import { PostInfo } from './post-info';
import { createPostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  post: PostInfo[];
  constructor() {
    this.post = [];
  }
  //서비스에서는 생성자를 만들면 안됨 -> 외우도록하자.

  getPostAll(): PostInfo[] | string {
    console.log('데이터베이스에 있는 모든 게시물의 정보를 반환합니다');
    if (this.post.length === 0) return '데이터베이스에 게시물이 없습니다';
    return this.post;
  }

  getPostInfo(postId: string): PostInfo | string {
    console.log(
      `데이터베이스에 있는 특정 id$${postId}를 가진 게시물의 정보를 반환합니다`,
    );
    if (!this.post) return '데이터베이스에 게시물이 없습니다';
    const findedPost = this.post.find((item) => item.id === postId);
    return findedPost;
  }

  createPost(dto: createPostDto): void {
    const newPost = { ...dto, id: String(new Date().toLocaleString()) };
    this.post.push(newPost);
    return;
  }

  updatePost(postId: string, content: string): void {
    console.log(
      `데이터베이스에 있는 특정 id${postId}를 가진 게시물의 정보를 변경합니다 ${postId} : ${content}`,
    );
    //map이 반환해주는건데 메소드만 돌리고 할당을 안해서 뻘짓
    this.post = this.post.map((item) => {
      if (item.id === postId) {
        const updatedPost = { ...item, content: content };
        return updatedPost;
      }
      return item;
    });
  }

  deletePost(postId: string): void {
    console.log(
      `데이터베이스에 있는 특정 id${postId}를 가진 게시물의 정보를 삭제합니다`,
    );
    this.post = this.post.filter((item) => item.id !== postId);
    return;
  }
}
