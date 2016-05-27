import {Component, Provider, provide, Input, Output, EventEmitter}  from '@angular/core';
import {Car} from './car';
//import {CONFIG} from '../common/app-config';

@Component({
  selector: 'car-detail',
  template: `
  <div class="car">
    <h2>Car: {{car.plate}} <button (click)="deleteCar()">X</button> </h2>
    <img src="img/car/{{car.id}}.png">

  </div>

  `,
})
export class CarComponent  {
  @Input()  car: Car;
  @Output('deleted') whenCarDeleted = new EventEmitter<Car>();
  constructor() {}
  deleteCar() {
    this.whenCarDeleted.emit(this.car);
  }
}
