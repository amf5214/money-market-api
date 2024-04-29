import { Controller, Body, Post, Get, UseGuards, Param, Patch } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { ProfileDto } from '../mongodb/profile/dto';
import { ProfileService } from '../mongodb/profile';
import { GetAuthAccount } from "../auth/decorator";
import { AuthAccount } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
	constructor(
		private profileService:ProfileService,
	) {}

	@Post('/create')
	async createone(@Body() dto:ProfileDto, @GetAuthAccount() authAccount:AuthAccount) {
		return this.profileService.createOne(dto, authAccount.id);
	}

	@Patch('/update/:id')
	async editone(@Body() dto:ProfileDto, @Param() params:any) {
		return this.profileService.editOne(params.id, dto);
	}

	@Get('/showall')
	findall() {
		return this.profileService.findAll();
	}

	@Get('/:id')
	findone(@Param() params:any) {
		return this.profileService.findOne(params.id);
	}

	@Get('/remove/:id')
	remove(@Param() params:any) {
		return this.profileService.remove(params.id);
	}

	@Get('')
	findOwn(@GetAuthAccount() authAccount:AuthAccount) {
		return this.profileService.findOwn(authAccount.id);
	}
}
