import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { ContentmanagementService } from "./contentmanagement.service";
import { SeriesDto } from "../mongodb/learningseries/dto";
import { GetAuthAccount } from "../auth/decorator";
import { AuthAccount } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller('contentmanagement')
export class ContentmanagementController {
  constructor(
    private contentmanagementService: ContentmanagementService
  ) {}

  @Post('/series/create')
  createseries(@Body() dto:SeriesDto, @GetAuthAccount() authAccount:AuthAccount) {
    this.contentmanagementService.createseries(dto, authAccount.id);
  }
}
