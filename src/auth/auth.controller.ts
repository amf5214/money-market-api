import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// Class to handle routing of auth path
@Controller('auth')
export class AuthController {
	// Constructor function that specifies dependencies for DI
	constructor(private authService:AuthService) {}

	// signup route within the auth path
	// Specifies success http codde with @HttpCode decorator
	@HttpCode(HttpStatus.CREATED)
	@Post('signup')
	signup(@Body() dto:AuthDto) {
		return this.authService.signup(dto);
	}

	// signin route within the auth path
	// Specifies success http codde with @HttpCode decorator
	@HttpCode(HttpStatus.OK)
	@Post('signin')
	signin(@Body() dto:AuthDto) {
		return this.authService.signin(dto);
	}
}

