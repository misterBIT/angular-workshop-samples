import {Injectable, Inject} from '@angular/core';
import {Optional} from '@angular/core';
import {Logger} from './common/logger.service';
import {Config} from './common/app-config';


import {Car} from './car'

// @Injectable()
export class CarService {
    constructor(@Optional() private logger:Logger,
                @Inject('app.config') private config: Config){
                    console.log(config);
                }
    query() {return [   new Car('puk-123', 120),
                        new Car('muk-777', 80),
                        new Car('shuk-178', 90),
                        new Car('luk-156', 20)
    ]}
}