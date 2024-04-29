import { Global, Module } from "@nestjs/common";

import { LocalConfigService } from './localconfig.service';

@Global()
@Module({
  providers: [
    {
      provide: LocalConfigService,
      useFactory: () => new LocalConfigService('../../.env'),
    },],
  exports: [LocalConfigService],
})
export class LocalConfigModule {}
