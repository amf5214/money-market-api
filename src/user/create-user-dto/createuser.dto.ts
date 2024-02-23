import { IsOptional, IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateUserDto {

    @IsOptional()
    @IsInt()
    id:number;

    @IsOptional()
    @IsString()
    firstName:string;

    @IsOptional()
    @IsString()
    lastName:string;

    @IsNotEmpty()
    @IsInt()
    authAccountId:number;

}
