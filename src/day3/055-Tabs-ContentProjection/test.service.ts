import {CarService} from '../070-DI-Cars/car.service';
export  class Test {
	constructor(carService:CarService) {
		console.log('created');
	}
}