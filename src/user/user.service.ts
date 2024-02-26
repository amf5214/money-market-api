import { Injectable, ForbiddenException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './update-user-dto';
import { User } from '@prisma/client';
import { CreateUserDto } from './create-user-dto';

@Injectable()
export class UserService {
    constructor(
        private prisma:PrismaService
    ) {}

    async getuser(authAccountId:number, id:number) {
        const authUser:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: authAccountId,
			},
		})
        if(authUser.id != id) {
            return new ForbiddenException('Trying to access another user\'s account');
        }
        const user:User = await this.prisma.user.findUnique({
			where: {
				id: id,
			},
		})
        
        return user;
    }

    async updateuser(id:number, dto:UpdateUserDto) {
        const user:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: id,
			},
		})
        return await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                ...dto,
            }
        });
    }

    async createuser(dto:CreateUserDto) {
        const user = await this.prisma.user.create({
            data: {
                ...dto
            },
        });
        return user;
    }
}
