import { Injectable } from '@nestjs/common';
import { SeriesDto } from "../mongodb/learningseries/dto";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "@prisma/client";
import { InjectRepository } from "@nestjs/typeorm";
import { LearnSection } from "../mongodb/entities/learnsection.entity";
import { Repository } from "typeorm";
import { LearnSeries } from "../mongodb/entities/learnseries.entity";

@Injectable()
export class ContentmanagementService {
  constructor(
    private prisma: PrismaService,
    @InjectRepository(LearnSeries)
    private learningSeriesRepository: Repository<LearnSeries>
  ) {
  }

  async createseries(dto: SeriesDto, id: any) {
    const series:LearnSeries = new LearnSeries();
    series.authorName = dto.authorName;
    series.authorUserId = dto.authorUserId;
    series.title = dto.title;
    series.coverArtId = dto.coverArtId;

    learningSeriesRepository
  }
}
