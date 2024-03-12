import { IsNumber, IsString } from "class-validator";
import { ObjectId } from "typeorm";

export class SectionDto {
    @IsString()
    objectId:ObjectId;

    @IsString()
    sectionName:string;

    @IsString()
    idName:string;

    @IsString()
    className:string;

    @IsString()
    innerHtml:string;

    @IsString()
    styleString:string;

    @IsNumber()
    orderId:number;
}