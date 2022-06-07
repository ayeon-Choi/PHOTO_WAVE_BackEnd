import { Injectable } from '@nestjs/common';
import { AlbumRepository } from './entities/album.repository';

@Injectable()
export class AlbumService {
  constructor(private albumRepository: AlbumRepository) {}
}
