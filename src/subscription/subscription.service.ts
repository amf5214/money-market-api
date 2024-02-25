import { Injectable, ForbiddenException } from '@nestjs/common';
import { Subscription, User } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { SubscriptionDto } from './dto';

@Injectable()
export class SubscriptionService {}
export class SubscriptionService {
    constructor(private prisma:PrismaService) {}
    async validate(id:number) {
    }
    async invalidate(id:number) {
    }
    async create(id:number, dto:SubscriptionDto) {
    }

    async remove(id:number) {
        await this.prisma.subscription.delete(id);
        return true;
    }

    async findOne(id:number) {
        const subscription = await this.prisma.subscription.findUnique({
            where: {
                id:id,
            },
        });
        return subscription;
    }

    async findUserSubscriptions(id:number) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: id,
			},
		})
        const subscriptions = await this.prisma.subscription.findAll({
            where: {
                userId:user.id,
            },
        });
        return subscriptions;
    }

    async update(id:number, dto:SubscriptionDto) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: id,
			},
		})
        if(dto.userId != user.id) {
            return new ForbiddenException('Trying to update another user\'s subscription');
        }
        return this.prisma.subscription.update(dto.userId,{isValid:dto.isValid});
    }
}
