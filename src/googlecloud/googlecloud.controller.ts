import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { GoogleCloudService } from "./googlecloud.service";
import { JwtGuard } from "../auth/guard";
import { FileContentDto } from "./dto";

@UseGuards(JwtGuard)
@Controller('googlecloud')
export class GoogleCloudController {
  constructor(private service:GoogleCloudService) {}

  @Get('print-buckets')
  async printBuckets() {
    this.service.printValidBuckets();
  }

  @Post('upload-image')
  async uploadImage(@Body() dto:FileContentDto) {
    this.service.addItem(dto.location, dto.fileExtension);
  }

}
