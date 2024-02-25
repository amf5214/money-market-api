import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

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

    updateuser(dto:UpdateUserDto) {
        return this.prisma.user.update({
            where: {
                id: dto.id,
            },
            data: {
                ...dto,
            }
        });
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
