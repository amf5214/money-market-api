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
import { MongodbModule } from './mongodb/mongodb.module';
import { Profile } from './mongodb/entities/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'MoneyMarket_Prod',
      entities: [Profile],
      synchronize: false,
    }),
    LearnModule,
    ContentmanagementModule,
    MongodbModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
