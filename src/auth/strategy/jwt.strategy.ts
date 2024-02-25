import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { PrismaService } from 'src/prisma/prisma.service';

// Class to handle jwt objects
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	// Constructor function that specifies dependencies for DI
	constructor(
		private jwt:JwtService,
		private config:ConfigService,
		private prisma:PrismaService,
	) {

		// Super function to pass arguements to super class
		super({
			// Parameter to specify how to get the jwt from the request
			jwtFromRequest:
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			// Parameter to specify the jwt for token creation
			secretOrKey: config.get('JWT_SECRET'),
		});
	}

	// Validation function so that the strategy can check if the token is legit
	async validate(payload: {sub:number, email:string}) {
		// Function to grab the authAccount object from the database using the email in the token
		const auth = await this.prisma.authAccount.findUnique({
			where: {
				id:payload.sub,
			},
			select: {
				id:true,
				email:true,
				users:true,
			},
		})

		return auth;
	}
}