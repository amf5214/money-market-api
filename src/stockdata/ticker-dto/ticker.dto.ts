import { IsEmail, IsNotEmpty, IsString, IsDate, IsInt } from 'class-validator';

export class TickerDto {

	@IsString()
	@IsNotEmpty()
	tickerName:string;

	@IsString()
	@IsNotEmpty()
	timeSpan:string;

	@IsDate()
	@IsNotEmpty()
	startDate:Date;

	@IsDate()
	@IsNotEmpty()
	endDate:Date;

	@IsInt()
	limit:number;
}
