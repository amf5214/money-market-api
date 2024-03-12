import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { TickerDto } from './ticker-dto';
import { FinancialsDto } from './financials-dto';
import { StockdataService } from './stockdata.service';

@UseGuards(JwtGuard)
@Controller('stockdata')
export class StockdataController {
	constructor(private stockdataService:StockdataService) {}

	@Post('ticker')
	tickerdata(@Body() dto:TickerDto) {
		const response = this.stockdataService.tickerdata(dto);
		console.log(response);
		return response;
	}

	@Get('market-status')
	marketstatus() {
		return this.stockdataService.marketstatus();
	}

	@Post('financials')
	tickerfinancials(@Body() dto:FinancialsDto) {
		return this.stockdataService.tickerfinancials(dto);
	}

	@Get('winners-losers')
	marketWinnersLosers() {
		return this.stockdataService.winnersLosersDemo();
	}
}
