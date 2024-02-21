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
		return this.stockdataService.tickerdata(dto);
	}

	@Get('market-status')
	marketstatus() {

	}


	}
}
