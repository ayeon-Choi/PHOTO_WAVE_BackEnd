import { Album } from 'src/album/entities/album.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 256 })
  password: string;

  @ManyToOne(() => Album, (album) => album.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'album_id' })
  album: Album;
}
