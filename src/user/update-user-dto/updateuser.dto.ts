import { IsOptional, IsString, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    firstName:string;

    @IsOptional()
    @IsString()
    lastName:string;

    @IsOptional()
    @IsInt()
    authAccountId:number;

}
