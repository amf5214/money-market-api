import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { SeriesDto } from "../mongodb/learningseries/dto";
import { GetAuthAccount } from "../auth/decorator";
import { AuthAccount } from "@prisma/client";
import { SeriesService } from "../mongodb/learningseries";
import { ObjectId } from "typeorm";

@UseGuards(JwtGuard)
@Controller('contentmanagement')
export class ContentManagementController {
  constructor(
    private seriesService: SeriesService,
  ) {}

  @Post('/series/create')
  createseries(@Body() dto:SeriesDto, @GetAuthAccount() authAccount:AuthAccount) {
    this.contentmanagementService.createseries(dto, authAccount.id);
  }
}
