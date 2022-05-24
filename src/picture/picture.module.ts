import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PictureRepository } from "./entity/picture.repository";
import { PictureController } from "./picture.controller";

import { PictureService } from "./picture.service";

@Module({
  imports: [TypeOrmModule.forFeature([PictureRepository])],
  controllers: [PictureController],
  providers: [PictureService],
})
export class PictureModule {}
