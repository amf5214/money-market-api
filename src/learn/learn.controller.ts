import { Controller } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { LearnService } from './learn.service';

@Controller('learn')
export class LearnController {}
