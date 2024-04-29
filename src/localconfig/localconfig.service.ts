import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import * as process from "node:process";

@Injectable()
export class LocalConfigService {
  private envConfig: { [key: string]: string };

  constructor(filepath:string) {
    try {
      this.envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, filepath)));
    } catch {
      this.envConfig = null;
    }

  }

  get(key: string): string {
    return this.envConfig[key];
  }

 getStripeApi() {
    if(process.env.STATE == "dev") {
      return this.envConfig['STRIPE_API_KEY'];
    } else {
      return process.env.STRIPE_API_KEY;
    }

  }

  getMongoDBHost(): string {
    if(process.env.STATE == "dev") {
      return this.envConfig['MONGODB_HOST'];
    } else {
      return process.env.MONGODB_HOST;
    }

  }

  getMongoDBPort(): number {
    if(process.env.STATE == "dev") {
      return Number(this.envConfig['MONGODB_PORT']);
    } else {
      return Number.parseInt(process.env.MONGODB_PORT);
    }

  }

  getMongoDBUser(): string {
    if(process.env.STATE == "dev") {
      return this.envConfig['MONGODB_USERNAME'];
    } else {
      return process.env.MONGODB_USERNAME;
    }
  }

  getMongoDBPassword(): string {
    if(process.env.STATE == "dev") {
      return this.envConfig['MONGODB_PASSWORD'];
    } else {
      return process.env.MONGODB_PASSWORD;
    }
  }

  getMongoDBName(): string {
    if(process.env.STATE == "dev") {
      return this.envConfig['MONGODB_DATABASE'];
    } else {
      return process.env.MONGODB_DATABASE;
    }

  }

  getGoogleCloudId(): string {
    if(process.env.STATE == "dev") {
      return this.envConfig['GCP_ID'];
    } else {
      return process.env.GCP_ID;
    }
  }

  getImageBucket(): string {
    if(process.env.STATE == "dev") {
      return this.envConfig['GCP_IMAGE_BUCKET'];
    } else {
      return process.env.GCP_IMAGE_BUCKET;
    }
  }
}
