import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'typeorm';

export class PageDto {

    objectId:ObjectId;

    @IsString()
    title:string;

    @IsString()
    description:string;

    @IsString()
    coverArtId:number;

    @IsNumber()
    learningSeriesId:ObjectId;

    @IsNumber()
    orderId:number;

    @IsString()
    videoSource:string;

}