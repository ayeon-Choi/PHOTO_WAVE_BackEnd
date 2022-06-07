import { Injectable } from '@nestjs/common';
import { PictureRepository } from './entities/picture.repository';

@Injectable()
export class PictureService {
  constructor(private pictureRepository: PictureRepository) {}
}
