import { Injectable } from "@nestjs/common";
import { AlbumRepository } from "./ablum.repository";

@Injectable()
export class AlbumService {
  constructor(private albumRepository: AlbumRepository) {}
}
