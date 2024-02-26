import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

// Custom client interface for prisma client to specify the database url
@Injectable()
export class PrismaService extends PrismaClient {
	constructor(config:ConfigService) {
		super({
			datasources: {
				db: {
					url: config.get('DATABASE_URL'),
				}
			}


		});
	}

}
