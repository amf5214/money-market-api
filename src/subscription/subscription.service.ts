import { Injectable, ForbiddenException } from '@nestjs/common';
import { Subscription, User } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { SubscriptionDto } from './dto';

@Injectable()
export class SubscriptionService {
    constructor(private prisma:PrismaService) {}

    async validate(id:number) {
        await this.prisma.subscription.update(id,{isValid:true});
        return true;
    }

    async invalidate(id:number) {
        await this.prisma.subscription.update(id,{isValid:false});
        return true;
    }

    async create(authId:number, dto:SubscriptionDto) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: authId,
			},
		})
        if(dto.userId != user.id) {
            return new ForbiddenException('Trying to create a subscription for another user');
        }
        return this.prisma.subscription.create({
            data: {
                ...dto,
            },
        });
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

    async findUserSubscriptions(authId:number) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: authId,
			},
		})
        const subscriptions = await this.prisma.subscription.findAll({
            where: {
                userId:user.id,
            },
        });
        return subscriptions;
    }

    async update(authId:number, dto:SubscriptionDto) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: authId,
			},
		})
        if(dto.userId != user.id) {
            return new ForbiddenException('Trying to update another user\'s subscription');
        }
        return this.prisma.subscription.update(dto.userId,{isValid:dto.isValid});
    }
}
