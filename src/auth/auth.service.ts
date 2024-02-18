import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config';
import { ForbiddenException } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
	constructor() {}

	async signin(dto:AuthDto) {

	}


	async signup(dto:AuthDto) {
		
	}

}
