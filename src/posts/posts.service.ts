import { Injectable } from '@nestjs/common';
import { PostInfo } from './post-info';
import { createPostDto } from './dtos/create-post.dto';
import { UsersService } from 'src/users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/users/user.entity';
@Injectable()
export class PostsService {
  post: PostInfo[];
  constructor(
    private userService: UsersService,
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity) // 유저 모듈 내에서 사용할 저장소 등록
    private userRepository: Repository<UserEntity>,
  ) {
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

  async createPost(dto: createPostDto): Promise<void> {
    const userInfo = await this.userService.getUserInfo(dto.id);
    const post = new PostEntity();
    // post.id = String(new Date().toLocaleString());
    post.title = dto.title;
    post.content = dto.content;
    post.name = userInfo.name;

    post.user = await this.userRepository.findOne({
      where: { id: dto.id },
    });
    await this.postRepository.save(post);
    // post.name = userInfo.name;
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
