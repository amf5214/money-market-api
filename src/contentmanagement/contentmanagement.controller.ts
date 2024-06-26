import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { SeriesDto } from "../mongodb/learningseries/dto";
import { GetAuthAccount } from "../auth/decorator";
import { AuthAccount } from "@prisma/client";
import { SeriesService } from "../mongodb/learningseries";
import { PageService } from "../mongodb/learningpage";
import { PageDto } from "../mongodb/learningpage/dto";

@UseGuards(JwtGuard)
@Controller('contentmanagement')
export class ContentManagementController {
  constructor(
    private seriesService:SeriesService,
    private pageService:PageService,
  ) {}

  @Get('home')
  getHome() {
    return this.seriesService.findAll();
  }

  @Post('/series/create')
  createSeries(@Body() dto:SeriesDto, @GetAuthAccount() authAccount:AuthAccount) {
    return this.seriesService.createSeries(authAccount.id, dto);
  }

  @Post('/series')
  findSeries(@Body() dto:SeriesDto) {
    console.log(dto.learningSeriesId);
    return this.seriesService.findOne(dto.learningSeriesId);
  }

  @Get('/series/owned')
  findOwnSeries(@GetAuthAccount() authAccount:AuthAccount) {
    return this.seriesService.findAllByAuthor(authAccount.id);
  }

  @Post('/pages/create')
  createPage(@Body() dto:PageDto, @GetAuthAccount() authAccount:AuthAccount) {
    return this.pageService.createPage(dto);
  }

  @Get('/pages')
  findPage(@Body() dto:PageDto) {
    return this.pageService.findOne(dto.learningPageId);
  }

  @Post('/pages/byseries')
  findAllPages(@GetAuthAccount() authAccount:AuthAccount, @Body() dto:PageDto) {
    return this.pageService.findAllBySeries(dto.learningSeriesId);
  }

  @Post('/series/update/:id/:field')
  async updateSeries(@Body() dto: SeriesDto, @Param() params:any) {
    await this.seriesService.updateSeries(params.id, params.field, dto);
  }

  @Post('/pages/update/:id/:field')
  async updatePage(@Body() dto: PageDto, @Param() params:any) {
    await this.pageService.updatePage(params.id, params.field, dto);
  }

}
