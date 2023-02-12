import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { PostEntity } from 'src/posts/post.entity';

@Entity('User')
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 60 })
  email: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 60 })
  signupVerifyToken: string;

  @OneToMany((type) => PostEntity, (post) => post.user)
  posts: PostEntity[];
}
