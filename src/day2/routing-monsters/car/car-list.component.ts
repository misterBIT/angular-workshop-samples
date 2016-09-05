
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from '@angular/core';
import {Car, CarService}   from './car.service.ts';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <h2>CARS</h2>
    <ul class="list1">
      <li *ngFor="let car of cars"
        [class.selected]="isSelected(car)"
        (click)="onSelect(car)">
        <span class="badge">{{car.id}}</span> {{car.name}}
        <img src="img/car/{{car.id}}.png">
      </li>
    </ul>
  `,
  styles: ['img {max-width:50px}']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  private _selectedId: number;

  constructor(
    private _service: CarService,
    private _router: Router,
    private _route: ActivatedRoute) {
      this._selectedId = +this._route.snapshot.params['id'];
  }
  ngOnInit() {
    this._service.getCars().then(cars => this.cars = cars)
  }  

  isSelected(car: Car) { return car.id === this._selectedId; }

  onSelect(car: Car) {
    this._router.navigate( ['/car', car.id] );
  }


}
