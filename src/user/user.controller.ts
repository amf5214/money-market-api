import { Controller, UseGuards, Get, Patch, Post, Param, Body } from '@nestjs/common';
import { User, AuthAccount } from '@prisma/client';

import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';
import { CheckPolicies } from 'src/casl/decorator';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { PoliciesGuard } from 'src/casl/guard';
import { Action } from 'src/casl/action.enum';
import { GetAuthAccount } from 'src/auth/decorator';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}

    @Patch('update')
    @UseGuards(PoliciesGuard)
    @CheckPolicies((ability: AppAbility) => ability.can(Action.Update, 'User'))
    updateuser(@Body() dto:UpdateUserDto, @GetAuthAccount() authAccount:AuthAccount) {
        return this.userService.updateuser(authAccount.id, dto);
    }

    @Post('create')
    @UseGuards(PoliciesGuard)
    @CheckPolicies((ability: AppAbility) => ability.can(Action.Manage, 'User'))
    createaccount(@Body() dto:CreateUserDto) {
        return this.userService.createuser(Number(dto.authAccountId));
    }

    @Get(':id')
    @UseGuards(PoliciesGuard)
    @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, 'User'))
    getuser(@Param() params:any) {
        return this.userService.getuser(Number(params.id));
    }
}
