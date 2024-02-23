import { IsNotEmpty, IsString } from 'class-validator';

export class TickerDto {

	@IsString()
	@IsNotEmpty()
	tickerName:string;

	@IsString()
	@IsNotEmpty()
	timeSpan:string;

	@IsString()
	@IsNotEmpty()
	startDate:string;

	@IsString()
	@IsNotEmpty()
	endDate:string;

	@IsString()
	@IsNotEmpty()
	limit:string;
}
