import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LocalConfigService {
  private envConfig: { [key: string]: string };

  constructor(filepath:string) {
    this.envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, filepath)));
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getMongoDBHost(): string {
    return this.envConfig['MONGODB_HOST'];
  }

  getMongoDBPort(): number {
    return Number(this.envConfig['MONGODB_PORT']);
  }

  getMongoDBUser(): string {
    return this.envConfig['MONGODB_USERNAME'];
  }

  getMongoDBPassword(): string {
    return this.envConfig['MONGODB_PASSWORD'];
  }

  getMongoDBName(): string {
    return this.envConfig['MONGODB_DATABASE'];
  }
}