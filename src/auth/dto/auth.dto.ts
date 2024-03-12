import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

// Creates a data transfer object (DTO) for sign in and sign up
// DTO will verify that an email object stored as a string 
// and a password object as a string are taken in
export class AuthDto {

	@IsEmail()
	@IsNotEmpty()
	email:string;

	@IsString()
	@IsNotEmpty()
	password:string;

	@IsString()
	@IsOptional()
	firstName:string;

	@IsString()
	@IsOptional()
	lastName:string;

	@IsString()
	@IsOptional()
	username:string;

}
