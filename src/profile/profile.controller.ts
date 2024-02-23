import { Controller, Body, Post, Get, UseGuards, Param, Patch } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { ProfileDto } from './dto';
import { ProfileService } from './profile.service';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
	constructor(
		private profileService:ProfileService,
	) {}

	@Post('create')
	async createone(@Body() dto:ProfileDto) {
		return this.profileService.createone(dto);
	}

	@Patch('update/:id')
	async editone(@Body() dto:ProfileDto, @Param() params:any) {
		return this.profileService.editone(params.id, dto);
	}

	@Get('showall')
	findall() {
		return this.profileService.findall();
	}

	@Get(':id')
	findone(@Param() params:any) {
		return this.profileService.findone(params.id);
	}

	@Get('remove/:id')
	remove(@Param() params:any) {
		return this.profileService.remove(params.id);
	}
}
