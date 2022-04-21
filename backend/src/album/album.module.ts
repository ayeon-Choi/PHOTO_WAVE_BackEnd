import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumRepository } from "./ablum.repository";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";

@Module({
  imports: [TypeOrmModule.forFeature([AlbumRepository])],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
