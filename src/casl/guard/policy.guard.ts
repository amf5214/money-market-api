import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { CaslAbilityFactory, AppAbility } from '../casl-ability.factory';
import { CHECK_POLICIES_KEY } from '../decorator';
import { PolicyHandler } from '../decorator';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
    private prisma:PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    const authAccount = context.switchToHttp().getRequest().user;
    let authId:number = authAccount.id;


    const user = await this.prisma.user.findFirst({
        where: {
            authAccountId: authId,
        }
    });
    const ability = await this.caslAbilityFactory.createForUser(user);

    return policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, ability),
    );
  }

  private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}