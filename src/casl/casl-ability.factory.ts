import { Injectable } from '@nestjs/common';
import { User, AuthAccount, Subscription, LearningSeries, Prisma } from '@prisma/client';
import { PureAbility, AbilityBuilder, subject, ExtractSubjectType } from '@casl/ability';
import { createPrismaAbility, PrismaQuery, Subjects } from '@casl/prisma';

import { Action } from './action.enum';

type PrismaSubjects = Subjects<{User: User, AuthAccount: AuthAccount, Subscription:Subscription, LearningSeries:LearningSeries}> | 'all';

export type AppAbility = PureAbility<[Action, PrismaSubjects], PrismaQuery>;

enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    CONTENT_CREATOR = 'CONTENT_CREATOR'
  }
  

@Injectable()
export class CaslAbilityFactory {
    createForUser(user:User) {
        const { can, cannot, build } = new AbilityBuilder<AppAbility>(createPrismaAbility);

        can(Action.Manage, 'Subscription', {userId: user.id});
        can(Action.Update, 'User', {id: user.id});
        can(Action.Read, 'User', {id: user.id});

        if(user.roles.some((role) => role === Role.ADMIN)) {
            can(Action.Manage, 'User');
        }

        if(user.roles.some((role) => role === Role.CONTENT_CREATOR)) {
            can(Action.Manage, 'LearningSeries', {creatorId:user.id});
        } else {
            cannot(Action.Update, 'LearningSeries');
        }

        return build();
    }
}
