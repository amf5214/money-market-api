import { Controller, UseGuards, Get, Patch, Post, Param, Body } from '@nestjs/common';
import { User } from '@prisma/client';

import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';
import { CheckPolicies } from 'src/casl/decorator';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { PoliciesGuard } from 'src/casl/guard';
import { Action } from 'src/casl/action.enum';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}

    @Get(':id')
    getuser(@Param() params:any) {
        return this.userService.getuser(Number(params.id));
    }

    @Patch('update')
    updateprofile(@Body() dto:UpdateUserDto) {
        return this.userService.updateuser(dto);
    }

    @Post('create')
    createaccount(@Body() dto:CreateUserDto) {
        return this.userService.createuser(dto);
    }
}
