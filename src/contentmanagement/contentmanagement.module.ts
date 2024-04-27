import { Module } from '@nestjs/common';
import { ContentManagementController } from './contentManagementController';

@Module({
  controllers: [ContentManagementController],
  providers: []
})
export class ContentManagementModule {}
