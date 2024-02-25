import { Injectable, ForbiddenException } from '@nestjs/common';
import { Subscription, User } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { SubscriptionDto } from './dto';
import { CheckUserAccess } from './access-check/accesscheck';

@Injectable()
export class SubscriptionService {
    constructor(
        private prisma:PrismaService,
        private authCheck:CheckUserAccess
    ) {}

    async validate(id:number) {
        await this.prisma.subscription.update({
            where: {
                id:id,
            },
            data: {
                isValid: true,
            }
        });
        return true;
    }

    async invalidate(id:number) {
        await this.prisma.subscription.update({
            where: {
                id:id,
            },
            data: {
                isValid: false,
            }
        });
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

    async remove(idToBeRemoved:number, authId:number) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: authId,
			},
		})
        if(user.id != idToBeRemoved) {
            return new ForbiddenException('Trying to create a subscription for another user');
        }
        await this.prisma.subscription.delete(idToBeRemoved);
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
        return this.authCheck.getAllAccessibleSubscriptions(authId);
    }

    async update(authId:number, dto:SubscriptionDto) {
        if(!await this.authCheck.checkAuthAccess(authId, idToBeRemoved)) {
            return new ForbiddenException('Trying to access a subscription for another user');
        }

        return await this.prisma.subscription.update({
            where: {
                id:dto.userId,
            },
            data: {
                isValid: dto.isValid,
            }
        });
    }
}
