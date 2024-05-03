import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, ObjectId } from 'typeorm';

import { Profile } from '../entities/profile.entity';
import { ProfileDto } from './dto';

// Service for interacting with the mongodb database profile document type
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  // Function for creating new Profile objects
  async createOne(dto:ProfileDto, id:number) {
    const newProfile:Profile = new Profile(); 
    newProfile.email = dto.email;
    newProfile.authAccountId = id;
    await this.profilesRepository.save(newProfile);
  }

  // Function for editing profile objects
  async editOne(id:ObjectId, dto:ProfileDto) {
    await this.profilesRepository.update(id, dto);
  }

  // Function for finding all profile objects
  findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  // Function for finding a specific profile object
  findOne(id: ObjectId): Promise<Profile | null> {
    return this.profilesRepository.findOneBy({ id });
  }

  // Function for deleting a profile object
  async remove(id: ObjectId): Promise<void> {
    await this.profilesRepository.delete(id);
  }
  // Function for finding one's own profile object
  async findOwn(authAccountId: number): Promise<Profile | null> {
    const profiles:Profile[] = await this.profilesRepository.find({
      where: {
        authAccountId: authAccountId
      },
      take: 1
    });
    return profiles.length > 0 ? profiles[0] : null;
  }

}