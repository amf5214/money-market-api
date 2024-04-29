import { Injectable } from '@nestjs/common';
import { Bucket, Storage } from "@google-cloud/storage";
import { LocalConfigService } from "../localconfig/localconfig.service";
import { ObjectId } from "typeorm";
import *  as mongodb from 'mongodb';

@Injectable()
export class GoogleCloudService {
  constructor(private localConfig:LocalConfigService) {}
}
