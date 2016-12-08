import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CarService, Car} from './car.service';
@Injectable()
export class CarDetailResolver implements Resolve<Car> {
	constructor(private carService: CarService, private router: Router) {
	}

	resolve(route: ActivatedRouteSnapshot): any {
		const id = route.params['id'];
		// console.log('Resolving a car with id: ', id);
		return this.carService.getCar(id).then(car=> {
			if (car) {
				return car;
			} else {
				this.router.navigate(['/car']);
				return false;
			}
		});
	}
}

