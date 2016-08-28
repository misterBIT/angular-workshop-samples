import {Component} from '@angular/core'

import {ColoringInputDirective} from './coloring-input.directive-fixed';

@Component({
	selector  : 'app',
	template  : `
       <input [coloring-input]="data" /> 
       <input coloring-input="ddd" /> 
    `,
})
class AppComponent {
	data = 'ttt';

}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, ColoringInputDirective],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

