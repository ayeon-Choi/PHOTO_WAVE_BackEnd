import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmConfigModule } from "./typeorm/typeorm-config.module";
import { UserModule } from "./user/user.module";
import { AlbumModule } from "./album/album.module";
import { PictureModule } from "./picture/picture.module";

@Module({
  imports: [TypeOrmConfigModule, AlbumModule, PictureModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
