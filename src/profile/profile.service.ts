import { Injectable } from '@nestjs/common';
import { MongodbService } from '../mongodb/mongodb.service';
import { CreateProfileDto } from '../mongodb/profile/create-profile-dto';
import { Profile } from '../mongodb/entities/profile.entity';



@Injectable()
export class ProfileService {
	constructor(
		private mongodb:MongodbService
	) {}

	async createone(dto:CreateProfileDto) {
    	await this.mongodb.profile().createOne(dto);
    }

	async editone(id:number, dto:CreateProfileDto) {
		await this.mongodb.profile().editOne(id, dto);
	}

	findall(): Promise<Profile[]> {
		return this.mongodb.profile().findAll();
	}

	findone(id: number): Promise<Profile | null> {
		return this.mongodb.profile().findOne(id);
	}

	async remove(id: number){
		await this.mongodb.profile().remove(id);
	}
}
