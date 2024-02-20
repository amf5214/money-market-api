import { Module } from '@nestjs/common';
import { ContentmanagementController } from './contentmanagement.controller';
import { ContentmanagementService } from './contentmanagement.service';

@Module({
  controllers: [ContentmanagementController],
  providers: [ContentmanagementService]
})
export class ContentmanagementModule {}
