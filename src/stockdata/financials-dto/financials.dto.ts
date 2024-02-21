import { IsEmail, IsNotEmpty, IsString, IsDate, IsInt, IsOptional } from 'class-validator';

export class FinancialsDto {

	@IsString()
	@IsNotEmpty()
	tickerName:string;

	@IsDate()
	@IsOptional()
	filingDate:Date;
}
