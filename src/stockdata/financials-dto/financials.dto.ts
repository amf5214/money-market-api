import { IsEmail, IsNotEmpty, IsString, IsDate, IsInt } from 'class-validator';

export class FinancialsDto {

	@IsString()
	@IsNotEmpty()
	tickerName:string;

	@IsDate()
	@IsNotEmpty()
	filingData:Date;
}
