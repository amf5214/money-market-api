import { Module } from '@nestjs/common';
import { StockdataService } from './stockdata.service';
import { StockdataController } from './stockdata.controller';

@Module({
  providers: [StockdataService],
  controllers: [StockdataController]
})
export class StockdataModule {}
