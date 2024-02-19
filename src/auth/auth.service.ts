import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config';
import { ForbiddenException } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from '../prisma/prisma.service'
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma, AuthAccount } from '@prisma/client';

@Injectable({})
export class AuthService {
	constructor(
		private prisma:PrismaService,
		private jwt:JwtService,
		private config:ConfigService,
		) {}

	async signin(dto:AuthDto) {
		return `Signed in ${dto.email}`;
	}


	async signup(dto:AuthDto) {
		return "Signed up";
		const hash = await argon.hash(dto.password);
	}

}
