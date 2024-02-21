import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

// Creates a data transfer object (DTO) for sign in and sign up
// DTO will verify that an email object stored as a string 
// and a password object as a string are taken in
export class CreateProfileDto {

	@IsString()
	@IsNotEmpty()
	name:string;

	@IsString()
	@IsNotEmpty()
	bio:string;

	@IsNumber()
	@IsNotEmpty()
	age:number;

	@IsString()
	@IsNotEmpty()
	experience:string;

	@IsString()
	@IsNotEmpty()
	citystate:string;

	@IsString()
	@IsNotEmpty()
	education:string;

}
