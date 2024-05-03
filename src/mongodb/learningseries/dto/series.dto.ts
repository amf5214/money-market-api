import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class SeriesDto {

    _id:ObjectId;

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

    @IsOptional()
    @IsString()
    learningSeriesId:string;
}