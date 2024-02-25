import { accessibleBy } from "@casl/prisma";
import { Injectable } from "@nestjs/common";
import { User } from '@prisma/client'; 

import { CaslAbilityFactory } from "src/casl/casl-ability.factory";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CheckUserAccess {
    constructor(
        private prisma:PrismaService,
        private casl:CaslAbilityFactory
        ) {}

    async getAllAccessibleSubscriptions(authId:number) {
        const userObj:User = await this.prisma.user.findFirst({
            where: {
                authAccountId: authId,
            },
        })
        const ability = this.casl.createForUser(userObj);
        const accessibleSubscriptions = await this.prisma.subscription.findMany({
            where: accessibleBy(ability).Subscription
        });
        return accessibleSubscriptions;
    }

    async checkAuthAccess(authId:number, subscriptionId:number) {
        const accessibleSubscriptions = await this.getAllAccessibleSubscriptions(authId);
        let output = false;
        accessibleSubscriptions.forEach(element => {
            console.log(`element: {${element.id==subscriptionId}}`);
            if(element.id == subscriptionId) {
                output = true;
            }
        });
        return output;
    }
}