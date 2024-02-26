import { Module } from '@nestjs/common';
import { LearnController } from './learn.controller';
import { HomeController } from './home/home.controller';
import { PageController } from './page/page.controller';
import { SeriesController } from './series/series.controller';

@Module({
  controllers: [LearnController, HomeController, PageController, SeriesController],
  providers: [],
  imports: []
})
export class LearnModule {}
