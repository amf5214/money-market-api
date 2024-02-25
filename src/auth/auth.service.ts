import { Injectable, ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config';

import * as argon from 'argon2';

import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileService } from 'src/mongodb/profile';
import { ProfileDto } from 'src/mongodb/profile/dto';

@Injectable({})
export class AuthService {
	// Constructor function that specifies dependencies for DI
	constructor(
		private prisma:PrismaService,
		private jwt:JwtService,
		private config:ConfigService,
		private profileService:ProfileService,
	) {}

	// Function to sign jwt tokens 
	async signToken(id:number, email:string) {
		// Construct payload for jwt
		const data = {
			sub:id,
			email:email,
		}

		// Retrieve secret key from the environment variables
		const secret = this.config.get('JWT_SECRET');

		// Create jwt bare token using secret key and payload
		const token = await this.jwt.signAsync(data, {
			expiresIn:'30m',
			secret:secret,
		});

		return {
			access_token: token,
		};
	}

	// Service to handle sign in attempts
	async signin(dto:AuthDto) {

		// Grab AuthAccount from database using unique email from dto
		const auth = await this.prisma.authAccount.findUnique({
			where: {
				email: dto.email,
			},
			select: {
				id:true,
				email:true,
				hash:true,
			},
		})

		// Check if an AuthAccount object was found under the provided email
		// If no account found return 403 error
		if(!auth) {
			throw new ForbiddenException("Incorrect Credentials");
		}
		
		// Verify that the password provided is correct
		const testPassword = await argon.verify(auth.hash, dto.password);

		// If incorrect password is given then return 403 error
		if(!testPassword) {
			throw new ForbiddenException("Incorrect Credentials");
		}

		// If the account sign in attempt was authenticated then return a jwt barer token
		return this.signToken(auth.id, auth.email);
	}

	// Service to handle sign up attempts
	async signup(dto:AuthDto) {

		// Hash the provided password for secure storage
		const hash = await argon.hash(dto.password);

		try {
		
			// Create an AuthAccount object for the new user
			const auth = await this.prisma.authAccount.create({
				data: {
					email: dto.email,
					hash: hash,
				},
				select: {
					id:true
				}

			});

			// Create a User object for the new user
			const user = await this.prisma.user.create({
				data: {
					authAccountId: auth.id,
				}
			});

			let newProfileDto = new ProfileDto();
			newProfileDto.authAccountId = auth.id;
			newProfileDto.email = dto.email;
			this.profileService.createOne(newProfileDto);


			// If the account details provided are valid return account created
			return {output: "Account Created"};

		} catch(error) {

			// If an error was raised check if it is a database error due to a 
			// non unique email address field
			if(error instanceof Prisma.PrismaClientKnownRequestError) {
				if(error.code == 'P2002') {
					throw new ForbiddenException('Credentials already taken');
				}
			}
			// If there was another error just throw it to the client
			throw error;
		}

	}

}
