import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { NewsService } from './news.service';
import { NewsDto } from './news-dto';

@UseGuards(JwtGuard)
@Controller('news')
export class NewsController {
	constructor(private newsService:NewsService) {}

	@Post('ticker-news')
	tickernews(dto:NewsDto) {
		return this.newsService.tickernews(dto);
	}

	@Post('market-news')
	marketnews(dto:NewsDto) {
		return this.newsService.marketnews(dto);
	}
}

