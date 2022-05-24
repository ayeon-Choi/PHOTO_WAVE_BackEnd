import { EntityRepository, Repository } from "typeorm";
import { Album } from "./ablum.entity";

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {}
