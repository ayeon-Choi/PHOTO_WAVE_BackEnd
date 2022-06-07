import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumRepository } from './entities/album.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumRepository])],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
