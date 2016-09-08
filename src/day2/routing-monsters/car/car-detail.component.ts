import {Component, OnInit, Input}  from '@angular/core';
import {Car, CarService}   from './car.service.ts';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	template: `
  <style>img {float:right;width:200px;transition:1s} img:hover {width:300px;}</style>
  <div *ngIf="car">
    <h2><span class="badge">{{car.id}}</span> Car: {{car.name}} </h2>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="car.name" placeholder="Car Name"/>
      <img src="img/car/{{car.id}}.png">
    </div>
    <button (click)="gotoCars()">Back</button>
  </div>
  `,
})
export class CarDetailComponent {
	car: Car;

	ngOnInit() {
		this.car = this._route.snapshot.data['car'];
	}

	constructor(private _router: Router, private _route: ActivatedRoute) {
	}

	gotoCars() {
		let carId = this.car ? this.car.id : null;
		// TODO: Pass along the car id if available so that the CarList component can select that car.
		this._router.navigate(['/car', {id: carId, test: 'something'}]);
	}
}

