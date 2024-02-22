import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';
import { CreateProfileDto } from './create-profile-dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async createOne(dto:CreateProfileDto) {
    const newProfile:Profile = new Profile(); 
    newProfile.email = dto.email;
    newProfile.authAccountId = dto.authAccountId;   
    this.profilesRepository.save(newProfile);
  }

  async editOne(id:number, dto:CreateProfileDto) {
    this.profilesRepository.update(id, dto);
  }

  findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  findOne(id: number): Promise<Profile | null> {
    return this.profilesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.profilesRepository.delete(id);
  }
}