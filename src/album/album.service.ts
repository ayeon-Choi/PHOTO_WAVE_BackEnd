import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./entitiy/ablum.repository";

@Injectable()
export class AlbumService {
  constructor(private albumRepository: AlbumRepository) {}
}
