import { Injectable } from '@nestjs/common';

@Injectable()
export class LearnService {
	constructor() {}

	home() {
		return {message:''};
	}

	seriesload(seriesId:number) {
		return {message:''};
	}

	pageload(pageId:number) {
		return {message:''};
	}
}
