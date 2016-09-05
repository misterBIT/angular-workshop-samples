var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Car = (function () {
    function Car(id, name) {
        this.id = id;
        this.name = name;
    }
    return Car;
})();
exports.Car = Car;
var CarService = (function () {
    function CarService() {
    }
    CarService.prototype.getCars = function () { return carsPromise; };
    CarService.prototype.getCar = function (id) {
        return carsPromise
            .then(function (cars) { return cars.filter(function (car) { return car.id === +id; })[0]; });
    };
    CarService = __decorate([
        core_1.Injectable()
    ], CarService);
    return CarService;
})();
exports.CarService = CarService;
var CARS = [
    new Car(101, 'Porche'),
    new Car(102, 'Toyota'),
    new Car(103, 'Peugeout'),
    new Car(104, 'Subaru')
];
var carsPromise = Promise.resolve(CARS);
//# sourceMappingURL=car.service.js.map