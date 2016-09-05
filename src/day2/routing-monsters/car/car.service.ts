import {Injectable} from '@angular/core';

export class Car {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class CarService {
  getCars() { return carsPromise; }

  getCar(id: number | string) {
    return carsPromise
      .then(cars => cars.filter(car => car.id === +id)[0]);
  }
}

var CARS = [
	new Car(1, 'Porche'),
	new Car(2, 'Toyota'),
	new Car(3, 'Peugeout'),
	new Car(4, 'Subaru')
];

var carsPromise = Promise.resolve(CARS);
