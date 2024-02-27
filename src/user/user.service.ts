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

    async getownuser(authAccountId:number) {
        const authUser:User = await this.prisma.user.findFirst({
			where: {
				authAccountId: authAccountId,
			},
		})
        const user:User = await this.prisma.user.findUnique({
			where: {
				id: authUser.id,
			},
		})
        
        return user;
    }

    async getuser(authAccountId:number, userId:number) {
        const user:User = await this.prisma.user.findUnique({
			where: {
				id: userId,
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
