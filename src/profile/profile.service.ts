import { Injectable } from '@nestjs/common';
import { MongodbService } from '../mongodb/mongodb.service';
import { CreateProfileDto } from '../mongodb/profile/create-profile-dto';
import { Profile } from '../mongodb/entities/profile.entity';
import { ObjectId } from 'typeorm';

@Injectable()
export class ProfileService {
	constructor(
		private mongodb:MongodbService
	) {}

	async createone(dto:CreateProfileDto) {
    	await this.mongodb.profile().createOne(dto);
    }

	async editone(id:ObjectId, dto:CreateProfileDto) {
		await this.mongodb.profile().editOne(id, dto);
	}

	findall(): Promise<Profile[]> {
		return this.mongodb.profile().findAll();
	}

	findone(id: ObjectId): Promise<Profile | null> {
		return this.mongodb.profile().findOne(id);
	}

	async remove(id: ObjectId){
		await this.mongodb.profile().remove(id);
	}
}
