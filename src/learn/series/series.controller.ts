import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthAccount } from '@prisma/client';
import { GetAuthAccount } from 'src/auth/decorator';
import { SeriesDto } from 'src/mongodb/learningseries/dto';
import { SeriesService } from 'src/mongodb/learningseries/series.service';

@Controller('learn/series')
export class SeriesController {
    constructor(
        private seriesService:SeriesService,
    ) {}

    @Get(':id')
    getseries(@Param() params:any, @GetAuthAccount() authAccount:AuthAccount) {
        return '';
    }

    @Patch('update/:id')
    updateseries(@Param() params:any, @GetAuthAccount() authAccount:AuthAccount, @Body() dto:SeriesDto) {
        return '';
    }

    @Post('create')
    createseries(@GetAuthAccount() authAccount:AuthAccount, @Body() dto:SeriesDto) {
        return '';
    }
}
