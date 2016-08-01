import {Component, Provider, provide}  from '@angular/core';
import {CarService} from './car.service';
import {CarComponent} from './car.component';
import {CONFIG} from './common/app-config';

@Component({
  selector: 'cars',
  providers: [CarService, provide('app.config', {useValue: CONFIG})],
//   providers: [new Provider(CarService, {useClass: CarService})],
//   providers: [provide(CarService, {useClass: CarService})],

  directives: [CarComponent],

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
export class CarsComponent  {
  cars;  
  constructor(private carService: CarService){
      this.cars = this.carService.query();
  }
  onCarDeleted(car) {
    console.log(`Car ${car.plate} is deleted`);
  }

}


let expected = [{plate: 'A'}, {plate: 'B'}];
let mockService = <CarService> {query: () => expected };
let comp = new CarsComponent(mockService);
console.assert(comp.cars.length === expected.length, 'should have cars when CarComponent created');
