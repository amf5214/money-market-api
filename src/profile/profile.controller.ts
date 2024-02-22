import { Controller, Body, Post, Get, UseGuards, Param, Patch } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { CreateProfileDto } from '../mongodb/profile/create-profile-dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {}
