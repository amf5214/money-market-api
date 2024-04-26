import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { HttpModule } from '@nestjs/axios';
import { LocalConfigModule } from 'src/localconfig/localconfig.module';
@Module({
  imports: [HttpModule, LocalConfigModule],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
