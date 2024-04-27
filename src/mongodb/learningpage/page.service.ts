import { Injectable } from '@nestjs/common';
import { PageDto } from './dto';
import { InjectRepository } from "@nestjs/typeorm";
import { LearnSection } from "../entities/learnsection.entity";
import { Repository } from "typeorm";
import { LearnPage } from "../entities/learnpage.entity";

@Injectable()
export class PageService {

    constructor(
      @InjectRepository(LearnPage)
      private learningPageRepository: Repository<LearnPage>
    ) {};
    
    getPage(pageId:number, authAccountId:number) {
        throw new Error('Method not implemented.');
    }
    updatePage(authAccountId:number, pageId:number, dto:PageDto) {
        throw new Error('Method not implemented.');
    }
    createPage(authAccountId:number, dto:PageDto) {
        throw new Error('Method not implemented.');
    }
    
}
