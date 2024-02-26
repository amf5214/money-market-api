import { Injectable } from '@nestjs/common';
import { SectionDto } from './dto';

@Injectable()
export class SectionService {
    
    getSection(sectionId:number, authAccountId:number) {
        throw new Error('Method not implemented.');
    }
    updateSection(authAccountId:number, sectionId:number, dto:SectionDto) {
        throw new Error('Method not implemented.');
    }
    createSection(authAccountId:number, dto:SectionDto) {
        throw new Error('Method not implemented.');
    }

}
