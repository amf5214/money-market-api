import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';
import { User, AuthAccount } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(
        private prisma:PrismaService
    ) {}

    async getuser(id:number) {
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

    async createuser(authAccountId:number) {
        const user = await this.prisma.user.create({
            data: {
                authAccountId: authAccountId,
            },
        });
        return user;
    }
}
