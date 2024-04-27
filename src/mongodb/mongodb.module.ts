import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileService } from './profile';
import { Profile } from './entities/profile.entity'
import { SeriesService } from "./learningseries";
import { PageService } from "./learningpage";
import { SectionService } from "./learningsection";
import { FilecontentService } from "./filecontent";
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
