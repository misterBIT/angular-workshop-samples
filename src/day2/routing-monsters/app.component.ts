import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CarService } from './car/car.service';
import { DialogService } from './shared/dialog.service';


@Component({
  selector: 'app',
  moduleId: module.id,
  providers: [CarService, DialogService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }