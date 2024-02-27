import { IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class FileContentDto {
    
    @IsString()
    objectId:ObjectId;

    @IsString()
    name:string;

    @IsString()
    renderedData:string;

    @IsString()
    text:string;

    @IsString()
    location:string;

    @IsString()
    picDate:Date;

}