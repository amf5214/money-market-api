import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config';
import { ForbiddenException } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from '../prisma/prisma.service'

@Injectable({})
export class AuthService {
	constructor(
		private prisma:PrismaService,
		) {}

	async signin(dto:AuthDto) {

	}


	async signup(dto:AuthDto) {
		
	}

}
