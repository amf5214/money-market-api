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

	tickernews(dto:NewsDto) {
		return 'Test Path';
	}

	marketnews(dto:NewsDto) {
		return 'Test Path';
	}
}


