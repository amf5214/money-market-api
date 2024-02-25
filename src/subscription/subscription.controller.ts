import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AuthAccount } from '@prisma/client';

import { SubscriptionService } from './subscription.service';
import { GetAuthAccount } from 'src/auth/decorator';
import { SubscriptionDto } from './dto';

@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionService:SubscriptionService) {}

    @Post('create')
    createSubscription(@Body() dto:SubscriptionDto, @GetAuthAccount() authAccount:AuthAccount) {
    }
    @Get('remove/:id')
    remove(@Param() params:any, @GetAuthAccount() authAccount:AuthAccount) {
    }
    @Post('update') 
    update(@GetAuthAccount() authAccount:AuthAccount, @Body() dto:SubscriptionDto) {
    }
    @Get(':id')
    getSubscription(@Param() params:any) {
    }
    @Get('')
    getUserSubscriptions(@GetAuthAccount() authAccount:AuthAccount) {
    }
}
