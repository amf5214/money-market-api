import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AuthAccount } from '@prisma/client';

import { SubscriptionService } from './subscription.service';
import { GetAuthAccount } from 'src/auth/decorator';
import { SubscriptionDto } from './dto';

@Controller('subscription')
export class SubscriptionController {}
