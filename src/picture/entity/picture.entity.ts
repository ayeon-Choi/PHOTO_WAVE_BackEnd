
import { Album } from "src/album/entitiy/ablum.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("picture")
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  picture_path: string;

  @OneToMany(() => Album, (album) => album.id)
  album: Album[];
}
