import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileService } from './profile';
import { Profile } from './entities/profile.entity'
import { SeriesService } from './learningseries/series.service';
import { PageService } from './learningpage/page.service';
import { SectionService } from './learningsection/section.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [],
  providers: [ProfileService, SeriesService, PageService, SectionService],
  exports: [ProfileService, SeriesService, PageService, SectionService],
})
export class MongodbModule {}
