import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';

@Entity('Post')
export class PostEntity {
  @PrimaryColumn()
  userId: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 60 })
  title: string;

  @Column({ length: 30 })
  content: string;

  @ManyToOne((type) => UserEntity, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
