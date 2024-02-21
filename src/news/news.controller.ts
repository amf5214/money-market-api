import { Controller } from '@nestjs/common';
import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { NewsService } from './news.service';
import { NewsDto } from './news-dto';

@UseGuards(JwtGuard)
@Controller('news')
export class NewsController {
}

