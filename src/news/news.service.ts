import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { NewsDto } from './news-dto';

@Injectable()
export class NewsService {
	constructor(
		private readonly httpService: HttpService,
		private config:ConfigService,
	) {}

	async tickernews(dto:NewsDto) {
		let tickerStr = dto.tickers.join(',');
		const basePath = `https://api.marketaux.com/v1/news/all?symbols=${tickerStr}&countries=${dto.country}&language=${dto.language}&filter_entities=true&limit=${dto.limit}&published_after=${dto.publishedAfterDate}&api_token=${this.config.get('MARKETAUX_API_TOKEN')}`;
		const observable = this.httpService.get(`${basePath}`);
		const response = await firstValueFrom(observable); 
		return response.data;

	}

	async marketnews(dto:NewsDto) {
		const basePath = `https://api.marketaux.com/v1/news/all?countries=${dto.country}&language=${dto.language}&filter_entities=true&limit=${dto.limit}&published_after=${dto.publishedAfterDate}&api_token=${this.config.get('MARKETAUX_API_TOKEN')}`;
		const observable = this.httpService.get(`${basePath}`);
		const response = await firstValueFrom(observable); 
		return response.data;
	}
}


