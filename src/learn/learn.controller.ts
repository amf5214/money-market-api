import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { LearnService } from './learn.service';


@UseGuards(JwtGuard)
@Controller('learn')
export class LearnController {
	constructor(private learnService: LearnService) {}

	@Get('home')
	home() {
		return this.learnService.home();
	}

	@Get('series/:id')
	seriesload(@Param() params: any) {
		return this.learnService.seriesload(params.id);
	}

	@Get('page/:id')
	pageload(@Param() params: any) {
		return this.learnService.pageload(params.id);
	}


}
