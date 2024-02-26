import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SeriesService } from './series.service';

@Controller('learn/series')
export class SeriesController {
    constructor(
        private seriesService:SeriesService,
    ) {}

    @Get(':id')
    getseries(@Param() params:any) {
        return '';
    }

    @Patch('update/:id')
    updateseries(@Param() params:any) {
        return '';
    }

    @Post('create')
    createseries() {
        return '';
    }
}
