import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService) {}

    getuser(id:number) {
        return '';
    }

    updateuser(dto:UpdateUserDto) {
        return '';
    }

    createuser(dto:CreateUserDto) {
        return '';
    }
}
