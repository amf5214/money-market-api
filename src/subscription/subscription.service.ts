import { Injectable, ForbiddenException } from '@nestjs/common';
import { Subscription, User } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { SubscriptionDto } from './dto';
import { SubscriptionAccessService } from './access-check';

@Injectable()
export class SubscriptionService {
    constructor(
        private prisma:PrismaService,
        private authCheck:SubscriptionAccessService
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
        return this.prisma.subscription.create({
            data: {
                ...dto,
            },
        });
    }

    async remove(idToBeRemoved:number, authId:number) {
        if(!await this.authCheck.checkAuthAccess(authId, idToBeRemoved)) {
            return new ForbiddenException('Trying to access a subscription for another user');
        }
        await this.prisma.subscription.delete({
            where: {
                id: idToBeRemoved,
            },
        });
        return true;
    }

    async findOne(authAccountId:number, id:number) {
        if(!await this.authCheck.checkAuthAccess(authAccountId, id)) {
            return new ForbiddenException('Trying to access a subscription for another user');
        }

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

    async update(authId:number, dto:SubscriptionDto, subId:number) {
        if(!await this.authCheck.checkAuthAccess(authId, subId)) {
            return new ForbiddenException('Trying to access a subscription for another user');
        }

        return await this.prisma.subscription.update({
            where: {
                id:subId,
            },
            data: {
                isValid: dto.isValid,
            }
        });
    }
}
