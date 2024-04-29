import { Injectable } from '@nestjs/common';
import { SectionDto } from './dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Profile } from "../entities/profile.entity";
import { Repository } from "typeorm";
import { LearnSection } from "../entities/learnsection.entity";

@Injectable()
export class SectionService {

    constructor(
      @InjectRepository(LearnSection)
      private learningSectionRepository: Repository<LearnSection>
    ) {};
    
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
