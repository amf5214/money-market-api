import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('stockdata')
export class StockdataController {
	@Post('ticker')
	tickerdata() {

	}

	@Get('market-status')
	marketstatus() {

	}

	@Post('ticker-financials')
	tickerfinancials() {

	}
}
