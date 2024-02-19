import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config';
import { ForbiddenException } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma, AuthAccount } from '@prisma/client';

@Injectable({})
export class AuthService {
	constructor(
		private prisma:PrismaService,
		private jwt:JwtService,
		private config:ConfigService,
		) {}

	async signToken(id:number, email:string) {
		const data = {
			sub:id,
			email:email,
		}

		const secret = this.config.get('JWT_SECRET');

		const token = await this.jwt.signAsync(data, {
			expiresIn:'30m',
			secret:secret,
		});

		return {
			access_token: token,
		};
	}

	async signin(dto:AuthDto) {
		return `Signed in ${dto.email}`;
	}


	async signup(dto:AuthDto) {

		const hash = await argon.hash(dto.password);

		try {
		

			const auth = await this.prisma.authAccount.create({
				data: {
					email: dto.email,
					hash: hash,
				},
				select: {
					id:true
				}

			});

			const user = await this.prisma.user.create({
				data: {
					authAccountId: auth.id,
				}


			});

			return {output: "Account Created"};
		} catch(error) {
			if(error instanceof Prisma.PrismaClientKnownRequestError) {
				if(error.code == 'P2002') {
					throw new ForbiddenException('Credentials already taken');
				}
			}
			throw error;
		}

	}

}
