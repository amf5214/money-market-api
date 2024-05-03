import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ObjectId } from 'typeorm';

export class PageDto {

    _id:ObjectId;

    @IsOptional()
    @IsString()
    title:string;

    @IsOptional()
    @IsString()
    description:string;

    @IsOptional()
    @IsString()
    coverArtId:number;

    @IsOptional()
    @IsString()
    learningSeriesId:string;

    @IsOptional()
    @IsNumber()
    orderId:number;

    @IsOptional()
    @IsString()
    videoSource:string;

    @IsOptional()
    @IsString()
    learningPageId;

}