import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

export class Car {
	constructor(public id: number, public name: string) {
	}
}

const CARS = [
	new Car(1, 'Porche'),
	new Car(2, 'Toyota'),
	new Car(3, 'Peugeout'),
	new Car(4, 'Subaru')
];

@Injectable()
export class CarService {
	carsPromise: Promise<Car[]>// = Promise.resolve(CARS);

	constructor(private http: Http) {

	}

	getCars() {
		//return this.carsPromise;
		if (!this.carsPromise) {
			this.carsPromise = this.http.get('data/cars.json')
				.map(res => res.json())
				.map(json => json.data)
				.toPromise();
		}
		return this.carsPromise;
	}

	getCar(id: number | string) {
		return this.carsPromise
			.then(cars => cars.filter(car => car.id === +id)[0]);
	}
}


