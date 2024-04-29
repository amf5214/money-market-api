import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { NewsDto } from './news-dto';

class NewsStory {
	title:string;
	description:string;
	url:string;
	image_url:string;
	constructor(data?:any) {
		if(data != null) {
			this.title = data['title'];
			this.description = data['description'];
			this.url = data['url'];
			this.image_url = data['image_url'];
		}
	}
}


// Service to acquire news json 
@Injectable()
export class NewsService {
	constructor(
		private readonly httpService: HttpService,
		private config:ConfigService,
	) {}

	// Service function to handle ticker news request 
	async tickerNews(dto:NewsDto) {
		let tickerStr = dto.tickers.join(',');
		const basePath = `https://api.marketaux.com/v1/news/all?symbols=${tickerStr}&countries=${dto.country}&language=${dto.language}&filter_entities=true&limit=${dto.limit}&published_after=${dto.publishedAfterDate}&api_token=${this.config.get('MARKETAUX_API_TOKEN')}`;
		const observable = this.httpService.get(`${basePath}`);
		const response = await firstValueFrom(observable); 
		return response.data;

	}

	// Service function to handle market news request 
	async marketNews(dto:NewsDto) {
		if(dto.country == null) {
			dto.country = 'us';
		}
		if(dto.language == null) {
			dto.language = 'en';
		}
		let date = '';
		if(dto.publishedAfterDate != null) {
			date = `published_after=${dto.publishedAfterDate}`;
		}	else {
			const dateObj:Date = new Date();
			dateObj.setDate(dateObj.getDate() - 5);
			date = `published_after=${dateObj.getFullYear()}-${dateObj.getMonth() < 10 ? '0' + dateObj.getMonth() : dateObj.getMonth()}-${dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate()}`
		}
		const basePath = `https://api.marketaux.com/v1/news/all?countries=${dto.country}&language=${dto.language}&filter_entities=true&limit=${dto.limit}&${date}&api_token=${this.config.get('MARKETAUX_API_TOKEN')}`;
		const observable = this.httpService.get(`${basePath}`);
		const response = await firstValueFrom(observable); 
		console.log(basePath);
		let newsArr:NewsStory[] = [];
		response.data['data'].forEach((story) => {
			newsArr.push(new NewsStory(story));
		});
		return newsArr;
	}

	// Service function to handle market news request 
	async marketNewsDemo(dto:NewsDto) {
		let newsArr:NewsStory[] = [];
		const dummyStory:NewsStory = {
			image_url: "https://i-invdn-com.investing.com/news/LYNXNPEF080OM_L.jpg",
			url: "https://www.investing.com/news/stock-market-news/is-ciena-corp-the-next-hot-ai-stock-to-buy-3326580",
			description: "Is Ciena Corp the next hot AI Stock to buy?",
			title: "Is Ciena Corp the next hot AI Stock to buy? By Investing.com"
		}

		for(let i = 0; i < 9; i++) {
			newsArr.push(dummyStory);
		}
		
		return newsArr;
	}
	
}


