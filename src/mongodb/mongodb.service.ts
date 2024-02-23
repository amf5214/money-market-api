import { Injectable } from '@nestjs/common';

import { ProfileService } from './profile/profile.service';

@Injectable()
export class MongodbService {
	constructor(private profileService: ProfileService) {}

	profile() {
		return this.profileService;
	}

}
