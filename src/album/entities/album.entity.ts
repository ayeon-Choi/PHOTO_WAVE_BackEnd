import { Picture } from 'src/picture/entities/picture.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('album')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column()
  page: number;

  @ManyToOne(() => Picture, (picture) => picture.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'picture_id' })
  picture: Picture;

  @OneToMany(() => User, (user) => user.id)
  user: User[];
}
