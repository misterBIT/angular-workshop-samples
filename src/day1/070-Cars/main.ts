import {Component} from '@angular/core'

import {CarsComponent} from './cars.component';
import {CarComponent} from './car.component';

@Component({
    selector: 'app',
    template: `
        <h1>Playground</h1>
        <cars></cars>
    `,
})
class AppComponent {}


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule],      
  declarations: [ AppComponent, CarsComponent, CarComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

