import { Injectable } from '@nestjs/common';
import { PageDto } from './dto';
import { InjectRepository } from "@nestjs/typeorm";
import { LearnSection } from "../entities/learnsection.entity";
import { ObjectId, Repository } from "typeorm";
import { LearnPage } from "../entities/learnpage.entity";
import { LearnSeries } from "../entities/learnseries.entity";
import { UserService } from "../../user/user.service";
import { SeriesDto } from "../learningseries/dto";
import { User } from "@prisma/client";

@Injectable()
export class PageService {

    constructor(
      @InjectRepository(LearnPage)
      private learningPageRepository: Repository<LearnPage>,
      private userService: UserService,
    ) {};

    async updatePage(pageId:ObjectId, field:string, dto:PageDto) {
        let page:LearnPage = await this.learningPageRepository.findOneBy({ id: pageId });
        switch(field) {
            case "title": {
                page.title = dto.title;
                break;
            } case "description": {
                page.description = dto.description;
                break;
            } case "learningSeriesId": {
                page.learningSeriesId = dto.learningSeriesId;
                break;
            } case "orderId": {
                page.orderId = dto.orderId;
                break;
            } case "videoSource": {
                page.videoSource = dto.videoSource;
                break;
            }
        }
        await this.learningPageRepository.save(page);
    }
    async createPage(dto:PageDto) {
        const page: LearnPage = new LearnPage();
        page.title = dto.title;
        page.description = dto.description;
        page.videoSource = dto.videoSource;
        page.learningSeriesId = dto.learningSeriesId;
        page.orderId = dto.orderId;

        await this.learningPageRepository.save(page);
    }

    // Function for finding all profile objects
    findAll(): Promise<LearnPage[]> {
        return this.learningPageRepository.find();
    }

    // Function for finding a specific profile object
    async findOne(id: ObjectId) {
        return this.learningPageRepository.findOneBy({ id });
    }

    // Function for finding an author's Series'
    async findAllBySeries(id: ObjectId): Promise<LearnPage[] | null> {
        return this.learningPageRepository.find({
            where: {
                learningSeriesId: id
            }
        });
    }
    
}
