import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { TickerDto } from './ticker-dto';
import { FinancialsDto } from './financials-dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StockdataService {
}
