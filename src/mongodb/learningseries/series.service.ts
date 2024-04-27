import { Injectable } from '@nestjs/common';
import { SeriesDto } from './dto';
import { InjectRepository } from "@nestjs/typeorm";
import { LearnSection } from "../entities/learnsection.entity";
import { Repository } from "typeorm";
import { LearnSeries } from "../entities/learnseries.entity";

@Injectable()
export class SeriesService {

    constructor(
      @InjectRepository(LearnSeries)
      private learningSeriesRepository: Repository<LearnSeries>
    ) {};

    getSeries(sectionId:number, authAccountId:number) {
        throw new Error('Method not implemented.');
    }
    updateSeries(authAccountId:number, sectionId:number, dto:SeriesDto) {
        throw new Error('Method not implemented.');
    }
    createSeries(authAccountId:number, dto:SeriesDto) {
        throw new Error('Method not implemented.');
    }
    
}
