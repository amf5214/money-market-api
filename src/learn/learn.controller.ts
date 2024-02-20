import { Controller } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { LearnService } from './learn.service';


@UseGuards(JwtGuard)
@Controller('learn')
export class LearnController {
	constructor(private learnService: LearnService) {}


}
