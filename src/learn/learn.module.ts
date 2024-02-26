import { Module } from '@nestjs/common';

import { LearnController } from './learn.controller';

@Module({
  controllers: [LearnController],
  providers: [],
})
export class LearnModule {}
