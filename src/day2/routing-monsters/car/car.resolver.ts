import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {CarService, Car} from "./car.service";
import {Observable} from "rxjs";
@Injectable()
export class CarResolver implements Resolve<Car> {
	constructor(private carService: CarService) {
	}

	resolve(route: ActivatedRouteSnapshot): any {
		const id = route.params['id'];
		// console.log('Resolving a car with id: ', id);
		return this.carService.getCar(id);
	}
}

