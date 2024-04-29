import { IsOptional, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class FileContentDto {
    
    objectId:ObjectId;

    @IsOptional()
    @IsString()
    name:string;

    @IsOptional()
    @IsString()
    renderedData:string;

    @IsOptional()
    @IsString()
    text:string;

    @IsString()
    location:string;

    @IsOptional()
    @IsString()
    picDate:Date;

    @IsString()
    fileExtension:string;

}