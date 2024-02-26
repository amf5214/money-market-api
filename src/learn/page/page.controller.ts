import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('learn/page')
export class PageController {
    constructor(
        private pageService:PageService,
    ) {}

    @Get(':id')
    getpage(@Param() params:any) {
        return '';
    }

    @Patch('update/:id')
    updatepage(@Param() params:any) {
        return '';
    }

    @Post('create')
    createpage() {
        return '';
    }
}
