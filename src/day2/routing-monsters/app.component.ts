import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './car/car.service';


@Component({
  selector: 'app',
  moduleId: module.id,
  providers: [CarService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }