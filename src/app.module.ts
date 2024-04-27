import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { StockdataModule } from './stockdata/stockdata.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaModule } from './prisma/prisma.module';
import { LearnModule } from './learn/learn.module';
import { ContentManagementModule } from './contentmanagement/contentmanagement.module';
import { MongodbModule } from './mongodb/mongodb.module';
import { Profile } from './mongodb/entities/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalConfigModule } from './localconfig/localconfig.module';
import { LocalConfigService } from './localconfig/localconfig.service';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionModule } from './subscription/subscription.module';
import { PaymentModule } from './payment/payment.module';
import { CaslModule } from './casl/casl.module';
import { LearnSeries } from "./mongodb/entities/learnseries.entity";
import { LearnPage } from "./mongodb/entities/learnpage.entity";
import { LearnSection } from "./mongodb/entities/learnsection.entity";

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
        url: localConfigService.getMongoDBHost(),
        database: localConfigService.getMongoDBName(),
        synchronize: true,
        logging: true,
        entities: [Profile, LearnSeries, LearnPage, LearnSection],
      }),
      inject: [LocalConfigService],
    }),
    SubscriptionModule,
    PaymentModule,
    CaslModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}

