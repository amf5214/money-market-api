import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from "typeorm";

import { SeriesDto } from './dto';
import { LearnSeries } from "../entities/learnseries.entity";
import { PrismaService } from "../../prisma/prisma.service";

import { UserService } from "../../user/user.service";

import { User } from "@prisma/client";

@Injectable()
export class SeriesService {
    constructor(
        @InjectRepository(LearnSeries)
        private learningSeriesRepository: Repository<LearnSeries>,
        private userService: UserService,
    ) {};

    getSeries(sectionId:number, authAccountId:number) {
        throw new Error('Method not implemented.');
    }
    updateSeries(authAccountId:number, sectionId:number, dto:SeriesDto) {
        throw new Error('Method not implemented.');
    }
    async createSeries(authAccountId:number, dto:SeriesDto) {
        const user: User = await this.userService.getownuser(authAccountId);

        const series: LearnSeries = new LearnSeries();
        series.authorName = user.firstName + " " + user.lastName;
        series.authorUserId = user.id;
        series.title = dto.title;
        series.coverArtId = dto.coverArtId;
        series.description = dto.description;

        await this.learningSeriesRepository.save(series);
    }

    // Function for finding all profile objects
    findAll(): Promise<LearnSeries[]> {
        return this.learningSeriesRepository.find();
    }

    // Function for finding a specific profile object
    findOne(id: ObjectId): Promise<LearnSeries | null> {
        return this.learningSeriesRepository.findOneBy({ id });
    }

    // Function for finding an author's Series'
    async findAllByAuthor(id: number): Promise<LearnSeries[] | null> {
        const user: User = await this.userService.getownuser(id);
        return this.learningSeriesRepository.findBy({ authorUserId: user.id });
    }
}
