import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';

@Controller('stockdata')
export class StockdataController {}
