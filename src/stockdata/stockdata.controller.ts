import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { TickerDto } from './ticker-dto';

@UseGuards(JwtGuard)
@Controller('stockdata')
export class StockdataController {
	@Post('ticker')
	tickerdata(dto:TickerDto) {

	}

	@Get('market-status')
	marketstatus() {

	}

	@Post('ticker-financials')
	tickerfinancials() {

	}
}
