import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('learn/home')
export class HomeController {
    constructor(
        private homeService:HomeService,
    ) {}

    @Get()
    gethome() {
        return '';
    }
}
