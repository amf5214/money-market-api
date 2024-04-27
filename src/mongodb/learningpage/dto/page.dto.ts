import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'typeorm';

export class PageDto {

    objectId:ObjectId;

    @IsString()
    title:string;

    @IsString()
    description:string;

    @IsString()
    coverArtId:ObjectId;

    @IsString()
    authorName:string;

    @IsNumber()
    authorUserId:number;

    @IsNumber()
    learningSeriesId:number;

    @IsNumber()
    orderId:number;

}