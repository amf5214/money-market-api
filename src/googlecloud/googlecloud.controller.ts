import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { GoogleCloudService } from "./googlecloud.service";
import { JwtGuard } from "../auth/guard";
import { FileContentDto } from "./dto";

@UseGuards(JwtGuard)
@Controller('googlecloud')
export class GoogleCloudController {
  constructor(private service:GoogleCloudService) {}
