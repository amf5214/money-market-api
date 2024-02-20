import { Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { LearnService } from './learn.service';


@UseGuards(JwtGuard)
@Controller('learn')
export class LearnController {
	constructor(private learnService: LearnService) {}

	@Get('home')
	home() {
		return {message: 'This is a test path for home service. Request=/learn/home'};
	}

	@Get('series/:id')
	seriesload(@Param() params: any) {
		return {message: `This is a test path for series service. Request=/learn/series/${params.id}`};
	}

	@Get('page/:id')
	pageload(@Param() params: any) {
		return {message: `This is a test path for page service. Request=/learn/page/${params.id}`};
	}


}
