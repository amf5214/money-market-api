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
		const response = this.stockdataService.tickerData(dto);
		console.log(response);
		return response;
	}

	@Get('market-status')
	marketstatus() {
		return this.stockdataService.marketStatus();
	}

	@Post('financials')
	tickerfinancials(@Body() dto:FinancialsDto) {
		return this.stockdataService.tickerFinancials(dto);
	}

	@Post('details')
	tickerdetails(@Body() dto:FinancialsDto) {
		return this.stockdataService.tickerDetails(dto);
	}

	@Get('winners-losers')
	marketWinnersLosers() {
		return this.stockdataService.winnersLosers();
	}
}
