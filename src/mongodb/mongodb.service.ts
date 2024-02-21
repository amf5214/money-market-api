import { Injectable } from '@nestjs/common';
import { ProfileService } from './profile/profile.service';
import { CreateProfileDto } from './profile/create-profile-dto';

@Injectable()
export class MongodbService {
	constructor(private profileService: ProfileService) {}

	profile() {
		return this.profileService;
	}

}
