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
    }
    async findOne(id:number) {
    }
    async findUserSubscriptions(id:number) {
    }
    async update(id:number, dto:SubscriptionDto) {
    }
}
