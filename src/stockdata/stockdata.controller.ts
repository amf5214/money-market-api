import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { TickerDto } from './ticker-dto';
import { FinancialsDto } from './financials-dto';
import { StockdataService } from './stockdata.service';

@UseGuards(JwtGuard)
@Controller('stockdata')
export class StockdataController {
	@Post('ticker')
	tickerdata(dto:TickerDto) {
	constructor(private stockdataService:StockdataService) {}

	}

	@Get('market-status')
	marketstatus() {

	}


	}
}
