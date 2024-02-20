import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { StockdataModule } from './stockdata/stockdata.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { LearnModule } from './learn/learn.module';
import { ContentmanagementModule } from './contentmanagement/contentmanagement.module';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    NewsModule, 
    StockdataModule, 
    ProfileModule, 
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LearnModule,
    ContentmanagementModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
