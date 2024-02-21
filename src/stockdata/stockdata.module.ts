import { Module } from '@nestjs/common';
import { StockdataService } from './stockdata.service';
import { StockdataController } from './stockdata.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [StockdataService],
  controllers: [StockdataController]
})
export class StockdataModule {}
