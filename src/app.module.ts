import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NestModule } from './nest/nest.module';
import { NewsModule } from './news/news.module';
import { StockdataModule } from './stockdata/stockdata.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, UserModule, NestModule, NewsModule, StockdataModule, ProfileModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
