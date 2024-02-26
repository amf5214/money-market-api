import { IsString, IsInt, IsOptional, Validate } from 'class-validator';
import { ValidLanguageRule } from '../validlanguage-rule';
import { ValidCountryRule } from '../validcountry-rule';

// Data Transfer Object for handling news request
export class NewsDto {

	@Validate(ValidLanguageRule)
	@IsOptional()
	language:string;

	@Validate(ValidCountryRule)
	@IsOptional()
	country:string;

	@IsInt()
	@IsOptional()
	limit:number;

	@IsString()
	@IsOptional()
	publishedAfterDate:string;

	@IsOptional()
	tickers:string[];
}

