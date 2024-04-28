import { Module } from '@nestjs/common';
import { ContentManagementController } from './contentmanagement.controller';

@Module({
  controllers: [ContentManagementController],
  providers: []
})
export class ContentManagementModule {}
