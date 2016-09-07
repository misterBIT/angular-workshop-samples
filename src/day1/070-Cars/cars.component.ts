import {Component, OpaqueToken, Inject}  from '@angular/core';
import {CarService} from './car.service';
import {CONFIG} from './common/app-config';
import {CarsCollection, Car} from "./car";
export const myToken = new OpaqueToken('CARS');

@Component({
	selector  : 'cars',
	providers : [
		CarService,
		//{provide:'CarService, useClass: CarService},
		{provide: 'app.config', useValue: CONFIG},
		{
			provide: myToken, useFactory: (config)=> config.title + 'demo', deps: ['app.config']
		},
		{provide: CarsCollection, useValue: new Car('puk-123', 120), multi: true},
		{provide: CarsCollection, useValue: new Car('muk-777', 80), multi: true},
		{provide: CarsCollection, useValue: new Car('shuk-178', 90), multi: true},
		{provide: CarsCollection, useValue: new Car('luk-156', 20), multi: true}
	],

	template: `
  <h2>Cars</h2>
  <ul>
    <li *ngFor="let car of cars">{{car.drive()}}</li>
  </ul>
  <ul>
    <car-detail *ngFor="let car of cars" [car]="car" (deleted)="onCarDeleted($event)"></car-detail>
  </ul>
  `,
})
export class CarsComponent {
	cars;

	constructor(private carService:CarService, @Inject(myToken) demo) {
		console.log(demo);
		this.cars = this.carService.query();
	}

	onCarDeleted(car) {
		console.log(`Car ${car.plate} is deleted`);
	}

}


let expected = [{plate: 'A'}, {plate: 'B'}];
let mockService = <CarService> {query: () => expected};
let comp = new CarsComponent(mockService, 'test');
console.assert(comp.cars.length === expected.length, 'should have cars when CarComponent created');
