import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { TickerDto } from './ticker-dto';
import { FinancialsDto } from './financials-dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StockdataService {
	constructor(
		private readonly httpService: HttpService,
		private config:ConfigService,
		) {}

	async tickerdata(dto:TickerDto) {
		const basePath = `https://api.polygon.io/v2/aggs/ticker/${dto.tickerName}/range/1/${dto.timeSpan}/${dto.startDate}/${dto.endDate}?adjusted=true&sort=asc&limit=${dto.limit}&apiKey=${this.config.get('POLYGON_API_TOKEN')}`;
		const observable = this.httpService.get(basePath);
		const response = await firstValueFrom(observable); 
		return response.data;
	}

	async marketstatus(): Promise<any> {
		const basePath = 'https://api.polygon.io/v1/marketstatus/now';
		const observable = this.httpService.get(`${basePath}?apiKey=${this.config.get('POLYGON_API_TOKEN')}`);
		const response = await firstValueFrom(observable);  
 		return {
			status: response.data.market,
			exchanges: response.data.exchanges,
			serverTime: response.data.serverTime,
		};	
	}

}
