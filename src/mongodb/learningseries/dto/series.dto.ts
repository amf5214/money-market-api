import { IsNumber, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class SeriesDto {

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
}