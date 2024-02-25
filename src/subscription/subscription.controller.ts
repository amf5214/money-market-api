import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { AuthAccount } from '@prisma/client';

import { SubscriptionService } from './subscription.service';
import { GetAuthAccount } from 'src/auth/decorator';
import { SubscriptionDto } from './dto';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionService:SubscriptionService) {}

    @Post('create')
    createSubscription(@Body() dto:SubscriptionDto, @GetAuthAccount() authAccount:AuthAccount) {
        return this.subscriptionService.create(authAccount.id, dto);
    }

    @Get('remove/:id')
    remove(@Param() params:any, @GetAuthAccount() authAccount:AuthAccount) {
        return this.subscriptionService.remove(Number(params.id), authAccount.id);
    }

    @Post('update') 
    update(@GetAuthAccount() authAccount:AuthAccount, @Body() dto:SubscriptionDto) {
        return this.subscriptionService.update(authAccount.id, dto);
    }

    @Get(':id')
    getSubscription(@GetAuthAccount() authAccount:AuthAccount, @Param() params:any) {
        return this.subscriptionService.findOne(Number(authAccount.id), Number(params.id));
    }

    @Get()
    getUserSubscriptions(@GetAuthAccount() authAccount:AuthAccount) {
        console.log(authAccount);
        return this.subscriptionService.findUserSubscriptions(Number(authAccount.id));
    }
}
