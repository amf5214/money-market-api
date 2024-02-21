import { Module, Global } from '@nestjs/common';
import { MongodbController } from './mongodb.controller';
import { MongodbService } from './mongodb.service';
import { ProfileService } from './profile/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity'

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [MongodbController],
  providers: [MongodbService, ProfileService],
  exports: [MongodbService, ProfileService],
})
export class MongodbModule {}
