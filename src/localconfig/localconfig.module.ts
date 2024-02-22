import { Module } from '@nestjs/common';
import { LocalConfigService } from './localconfig.service';

@Module({
  providers: [
    {
      provide: LocalConfigService,
      useFactory: () => new LocalConfigService('../../.env'),
    },],
  exports: [LocalConfigService],
})
export class LocalConfigModule {}
