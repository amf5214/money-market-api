import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, ObjectId } from 'typeorm';

import { Profile } from '../entities/profile.entity';
import { ProfileDto } from './dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async createOne(dto:ProfileDto) {
    const newProfile:Profile = new Profile(); 
    newProfile.email = dto.email;
    newProfile.authAccountId = dto.authAccountId;   
    await this.profilesRepository.save(newProfile);
  }

  async editOne(id:ObjectId, dto:ProfileDto) {
    await this.profilesRepository.update(id, dto);
  }

  findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  findOne(id: ObjectId): Promise<Profile | null> {
    return this.profilesRepository.findOneBy({ id });
  }

  async remove(id: ObjectId): Promise<void> {
    await this.profilesRepository.delete(id);
  }
}