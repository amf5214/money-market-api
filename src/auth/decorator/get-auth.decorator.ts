import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Created decorator function that grabs the authaccount object that is embedded in the request
// This is the authaccount object that the jwt guard embeds into the request when it veifies 
// the validity of the bearer auth token
export const GetAuthAccount = createParamDecorator(
	(data: string | undefined, ctx: ExecutionContext) => {
		const request:Express.Request = ctx
			.switchToHttp()
			.getRequest();
		if(data) {
			return request.user[data];
		}
		return request.user;
	},
);
