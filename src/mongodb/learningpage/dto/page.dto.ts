import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ObjectId } from 'typeorm';

export class PageDto {

    objectId:ObjectId;

    @IsOptional()
    @IsString()
    title:string;

    @IsOptional()
    @IsString()
    description:string;

    @IsOptional()
    @IsString()
    coverArtId:number;

    learningSeriesId:ObjectId;

    @IsOptional()
    @IsNumber()
    orderId:number;

    @IsOptional()
    @IsString()
    videoSource:string;

}