import { Injectable } from '@nestjs/common';
import { MongodbService } from '../mongodb/mongodb.service';
import { CreateProfileDto } from '../mongodb/profile/create-profile-dto';
import { Profile } from '../mongodb/entities/profile.entity';



@Injectable()
export class ProfileService {
	constructor(
		private mongodb:MongodbService
	) {}

}
