// How to extend an Angular2 pipe

import {Component} from '@angular/core'
import {DatePipe} from "@angular/common";

import {DateItPipe} from './dateIt.pipe';

@Component({
    selector: 'app',
    template: `
         <div>
      Date: {{ today }} <br>
      ShortDate: {{ today | date: shortdate }} 
      <hr>
      MyDate: {{ today | dateIt }}
      
    </div>
    `
})
class AppComponent {
    today = new Date();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, DateItPipe],   
  bootstrap: [ AppComponent ],  
  // Must configure as provider so become injectable by the DI system   
  providers: [ DatePipe ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
