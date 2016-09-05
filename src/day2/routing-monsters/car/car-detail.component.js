var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var CarDetailComponent = (function () {
    function CarDetailComponent(_router, _routeParams, _service) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._service = _service;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get('id');
        this._service.getCar(id).then(function (car) { return _this.car = car; });
    };
    CarDetailComponent.prototype.gotoCars = function () {
        var carId = this.car ? this.car.id : null;
        // Pass along the car id if available
        // so that the CarList component can select that car.
        // Add a totally useless `test` parameter
        this._router.navigate(['Cars', { id: carId, test: 'misterBIT' }]);
    };
    CarDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <h2>CAR</h2>\n  <div *ngIf=\"car\">\n    <h3>\"{{car.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{car.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"car.name\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"gotoCars()\">Back</button>\n  </div>\n  "
        })
    ], CarDetailComponent);
    return CarDetailComponent;
})();
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=car-detail.component.js.map