import { Injectable } from '@nestjs/common';

@Injectable()
export class LearnService {
	constructor() {}

	home() {
		return {message:''};
	}

	loadseries(seriesId:number) {
		return {message:''};
	}

	loadpage(pageId:number) {
		return {message:''};
	}
}
