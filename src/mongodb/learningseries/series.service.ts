import { Injectable } from '@nestjs/common';
import { SeriesDto } from './dto';

@Injectable()
export class SeriesService {

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
