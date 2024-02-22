import { IsEmail, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

// Creates a data transfer object (DTO) for sign in and sign up
// DTO will verify that an email object stored as a string 
// and a password object as a string are taken in
export class CreateProfileDto {

	@IsString()
	@IsOptional()
	name:string;

	@IsString()
	@IsOptional()
	bio:string;

	@IsNumber()
	@IsOptional()
	age:number;

	@IsString()
	@IsOptional()
	experience:string;

	@IsString()
	@IsOptional()
	citystate:string;

	@IsString()
	@IsOptional()
	education:string;

	@IsEmail()
	@IsOptional()
	email:string;

	@IsNumber()
	@IsOptional()
	authAccountId:number;

}
