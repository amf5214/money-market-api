import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { NewsService } from './news.service';
import { NewsDto } from './news-dto';

// Controller to handle routing for news paths
@UseGuards(JwtGuard)
@Controller('news')
export class NewsController {
	constructor(private newsService:NewsService) {}

	// Route to recieve ticker specific news as a json object
	@Post('ticker-news')
	tickernews(@Body() dto:NewsDto) {
		return this.newsService.tickernews(dto);
	}

	// Route to recieve market news as a json object
	@Post('market-news')
	marketnews(@Body() dto:NewsDto) {
		return this.newsService.marketnews(dto);
	}
}

