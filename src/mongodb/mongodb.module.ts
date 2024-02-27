import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileService } from './profile';
import { Profile } from './entities/profile.entity'
import { SeriesService } from './learningseries/series.service';
import { PageService } from './learningpage/page.service';
import { SectionService } from './learningsection/section.service';
import { FilecontentService } from './filecontent/filecontent.service';
import { LearnPage } from './entities/learnpage.entity';
import { FileContent } from './entities/filecontent.entity';
import { LearnSection } from './entities/learnsection.entity';
import { LearnSeries } from './entities/learnseries.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Profile, LearnPage, LearnSeries, LearnSection, FileContent])],
  controllers: [],
  providers: [ProfileService, SeriesService, PageService, SectionService, FilecontentService],
  exports: [ProfileService, SeriesService, PageService, SectionService, FilecontentService],
})
export class MongodbModule {}
