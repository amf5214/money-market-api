import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserAccount = createParamDecorator(
	(data: string | undefined, ctx: ExecutionContext) => {
		const request:Express.Request = ctx
			.switchToHttp()
			.getRequest();
		if(data) {
			return request.user.users[0][data];
		}
		return request.user.users[0];
	},
);