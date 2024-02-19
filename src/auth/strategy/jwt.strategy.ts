import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private jwt:JwtService,
		private config:ConfigService,
		private prisma:PrismaService,
	) {

		super({
			jwtFromRequest:
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get('JWT_SECRET'),
		});
	}

	async validate(payload: {sub:number, email:string}) {
		const auth = await this.prisma.authAccount.findUnique({
			where: {
				id:payload.sub,
			}
		})
		delete auth.hash;

		return auth;
	}
}