import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Post')
export class PostEntity {
  @PrimaryColumn()
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 60 })
  title: string;

  @Column({ length: 30 })
  content: string;
}
