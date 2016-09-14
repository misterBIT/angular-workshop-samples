import {Injectable, Inject} from '@angular/core';
import {Optional} from '@angular/core';
import {Logger} from './common/logger.service';
import {Config} from './common/app-config';


import {Car, CarsCollection} from './car'

// @Injectable()
export class CarService {
	constructor(@Optional() private logger: Logger,
	            @Inject(CarsCollection) private carsCollection,
	            @Inject('app.config') private config: Config) {
		console.log(config);
	}

	query() {
		return this.carsCollection;
	}
}