import { Injectable } from '@nestjs/common';
import { Bucket, Storage } from "@google-cloud/storage";
import { LocalConfigService } from "../localconfig/localconfig.service";
import { ObjectId } from "typeorm";
import *  as mongodb from 'mongodb';

@Injectable()
export class GoogleCloudService {
  constructor(private localConfig:LocalConfigService) {}

  async printValidBuckets() {
    const storage:Storage = new Storage({
      projectId: this.localConfig.getGoogleCloudId(),
    });
    const [buckets] = await storage.getBuckets();
    console.log('Buckets:');

    for (const bucket of buckets) {
      console.log(`- ${bucket.name}`);
    }

    console.log('Listed all storage buckets.');
  }

  async addItem(filePath:string, filetype:string) {
    const destFileName:string = (new mongodb.ObjectId()).toString() + filetype;
    console.log(destFileName);

    const storage = new Storage({
      projectId: this.localConfig.getGoogleCloudId(),
    });

    const options = {
      destination: destFileName,
      preconditionOpts: {ifGenerationMatch: 0},
    };

    await storage.bucket(this.localConfig.getImageBucket()).upload(filePath, options);
    
    return destFileName;
  }
}
