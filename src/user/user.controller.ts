import { Controller, UseGuards, Get, Patch, Post, Param, Body } from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}

    @Get(':id')
    getuser(@Param() params:any) {
        return this.userService.getuser(params.id);
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
