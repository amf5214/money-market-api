import { Injectable } from '@nestjs/common';
import { PageDto } from './dto';

@Injectable()
export class PageService {
    
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
