import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { StockdataModule } from './stockdata/stockdata.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaModule } from './prisma/prisma.module';
import { LearnModule } from './learn/learn.module';
import { ContentmanagementModule } from './contentmanagement/contentmanagement.module';
import { MongodbModule } from './mongodb/mongodb.module';
import { Profile } from './mongodb/entities/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalConfigModule } from './localconfig/localconfig.module';
import { LocalConfigService } from './localconfig/localconfig.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    AuthModule, 
    UserModule, 
    NewsModule, 
    StockdataModule, 
    ProfileModule, 
    PrismaModule,
    LearnModule,
    ContentmanagementModule,
    MongodbModule,
    LocalConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [LocalConfigModule],
      useFactory: async (localConfigService: LocalConfigService) => ({
        type: 'mongodb',
        host: localConfigService.getMongoDBHost(),
        port: localConfigService.getMongoDBPort(),
        database: localConfigService.getMongoDBName(),
        entities: [Profile],
        synchronize: true,
      }),
      inject: [LocalConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}

