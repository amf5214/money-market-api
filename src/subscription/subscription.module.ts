import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionAccessService } from './access-check';


@Module({
  providers: [SubscriptionService, SubscriptionAccessService],
  controllers: [SubscriptionController]
})
export class SubscriptionModule {}
