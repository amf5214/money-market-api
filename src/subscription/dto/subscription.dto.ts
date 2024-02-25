import { IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class SubscriptionDto {

    @IsBoolean()
    isValid:boolean;

    @IsNumber()
    userId:number;
}