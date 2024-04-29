import { Global, Module } from "@nestjs/common";
import { GoogleCloudService } from './googlecloud.service';
import { LocalConfigModule } from "../localconfig/localconfig.module";
import { GoogleCloudController } from './googlecloud.controller';

@Global()
@Module({
  providers: [GoogleCloudService],
  controllers: [GoogleCloudController]
})
export class GoogleCloudModule {}
