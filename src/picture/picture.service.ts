import { Injectable } from "@nestjs/common";
import { PictureRepository } from "./entity/picture.repository";

@Injectable()
export class PictureService {
  constructor(private pictureRepository: PictureRepository) {}
}
