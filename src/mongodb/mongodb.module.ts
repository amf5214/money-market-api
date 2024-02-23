import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileService } from './profile';
import { Profile } from './entities/profile.entity'

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class MongodbModule {}
