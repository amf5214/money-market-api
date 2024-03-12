import { Module } from '@nestjs/common';
import { LearnController } from './learn.controller';
import { HomeController } from './home/home.controller';
import { PageController } from './page/page.controller';
import { SeriesController } from './series/series.controller';

import { PageService } from 'src/mongodb/learningpage';
import { SectionService } from 'src/mongodb/learningsection';
import { SeriesService } from 'src/mongodb/learningseries';
import { HomeService } from './home/home.service';

@Module({
  controllers: [LearnController, HomeController, PageController, SeriesController],
  providers: [PageService, SectionService, SeriesService, HomeService],
  imports: []
})
export class LearnModule {}
