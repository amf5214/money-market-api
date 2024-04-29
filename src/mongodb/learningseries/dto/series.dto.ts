import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class SeriesDto {

    objectId:ObjectId;

    @IsOptional()
    @IsString()
    title:string;

    @IsOptional()
    @IsString()
    description:string;

    @IsOptional()
    @IsString()
    coverArtId:string;

    @IsOptional()
    @IsString()
    authorName:string;

    @IsOptional()
    @IsNumber()
    authorUserId:number;
}