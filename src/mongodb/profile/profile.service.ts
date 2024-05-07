import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, ObjectId as TypeObjectId } from 'typeorm';
import { ObjectId } from 'mongodb';

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
  async editOne(id:number, dto:ProfileDto) {
    const profile:Profile = await this.findOwn(id);
    await this.profilesRepository.update(profile.id, dto);
  }

  // Function for finding all profile objects
  findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  // Function for finding a specific profile object
  findOne(id: TypeObjectId): Promise<Profile | null> {
    return this.profilesRepository.findOneBy({ id });
  }

  // Function for deleting a profile object
  async remove(id: TypeObjectId): Promise<void> {
    await this.profilesRepository.delete(id);
  }
  // Function for finding one's own profile object
  async findOwn(authAccountId: number): Promise<Profile | null> {
    return await this.profilesRepository.findOne({
      where: {
        authAccountId: authAccountId
      }
    });
  }

}