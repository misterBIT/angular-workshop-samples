import {Component, ViewEncapsulation} from '@angular/core'

import {Demo1Component} from './demo1.component';

@Component({
    selector: 'app',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
      <demo-scene></demo-scene>
    `
})
class AppComponent {
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule],      
  declarations: [ AppComponent, Demo1Component],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
