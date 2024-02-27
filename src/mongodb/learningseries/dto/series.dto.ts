import { IsNumber, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class SeriesDto {
    @IsString()
    objectId:ObjectId;

    @IsString()
    title:string;

    @IsString()
    descriptioin:string;

    @IsString()
    coverArtId:ObjectId;

    @IsString()
    authorName:string;

    @IsNumber()
    authorUserId:number;
}