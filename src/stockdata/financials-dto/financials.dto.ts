import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class FinancialsDto {

	@IsString()
	@IsNotEmpty()
	tickerName:string;

	@IsDate()
	@IsOptional()
	filingDate:Date;
}
