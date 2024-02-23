import { IsOptional, IsString, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateUserDto {

    @IsNotEmpty()
    @IsInt()
    id:number;

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
