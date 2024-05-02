import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// Class to handle routing of auth path
@Controller('auth')
export class AuthController {
	// Constructor function that specifies dependencies for DI
	constructor(private authService:AuthService) {}

	// signup route within the auth path
	// Specifies success http code with @HttpCode decorator
	@HttpCode(HttpStatus.CREATED)
	@Post('/signup')
	signUp(@Body() dto:AuthDto) {
		return this.authService.signUp(dto);
	}

	// signin route within the auth path
	// Specifies success http code with @HttpCode decorator
	@HttpCode(HttpStatus.OK)
	@Post('/signin')
	signIn(@Body() dto:AuthDto) {
		return this.authService.signIn(dto);
	}
}

