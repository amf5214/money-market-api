import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService) {}

    async getuser(id:number) {
        const user = await this.prisma.user.findUnique({
			where: {
				id: id,
			},
			select: {
				id:true,
                authAccountId:true,
                firstName:true,
                lastName:true,
			},
		})
        return user;
    }

    updateuser(dto:UpdateUserDto) {
        return '';
    }

    async createuser(dto:CreateUserDto) {
        const user = await this.prisma.user.create({
            data: {
                authAccountId: dto.authAccountId,
            },
            select: {
                id:true,
            }
        });
        return user;
    }
}
