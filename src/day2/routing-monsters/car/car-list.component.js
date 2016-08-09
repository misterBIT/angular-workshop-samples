var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TODO SOMEDAY: Feature Componetized like CrisisCenter
var core_1 = require('angular2/core');
var CarListComponent = (function () {
    function CarListComponent(_service, _router, routeParams) {
        this._service = _service;
        this._router = _router;
        this._selectedId = +routeParams.get('id');
    }
    CarListComponent.prototype.isSelected = function (car) { return car.id === this._selectedId; };
    CarListComponent.prototype.onSelect = function (car) {
        this._router.navigate(['CarDetail', { id: car.id }]);
    };
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getCars().then(function (cars) { return _this.cars = cars; });
    };
    CarListComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>CARS</h2>\n    <ul class=\"list1\">\n      <li *ngFor=\"#car of cars\"\n        [class.selected]=\"isSelected(car)\"\n        (click)=\"onSelect(car)\">\n        <span class=\"badge\">{{car.id}}</span> {{car.name}}\n        <img src=\"img/car/{{car.id}}.png\">\n      </li>\n    </ul>\n  ",
            styles: ['img {max-width:50px}']
        })
    ], CarListComponent);
    return CarListComponent;
})();
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=car-list.component.js.map