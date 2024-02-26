import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PageService } from 'src/mongodb/learningpage/page.service';
import { GetAuthAccount } from 'src/auth/decorator';
import { AuthAccount } from '@prisma/client';
import { PageDto } from 'src/mongodb/learningpage/dto';

@Controller('learn/page')
export class PageController {
    constructor(
        private pageService:PageService,
    ) {}

    @Get(':id')
    getpage(@Param() params:any, @GetAuthAccount() authAccount:AuthAccount) {
        return this.pageService.getPage(Number(params.id), authAccount.id);
    }

    @Patch('update/:id')
    updatepage(@Param() params:any, @GetAuthAccount() authAccount:AuthAccount, @Body() dto:PageDto) {
        return this.pageService.updatePage(authAccount.id, Number(params.id), dto);
    }

    @Post('create')
    createpage(@GetAuthAccount() authAccount:AuthAccount, @Body() dto:PageDto) {
        return this.pageService.createPage(authAccount.id, dto);
    }
}
