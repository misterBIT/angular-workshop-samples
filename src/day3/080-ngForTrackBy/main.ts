import {Component} from '@angular/core'

import {MyComp, NodeLoggerDirective} from './my.component';

@Component({
    selector: 'app',
    template: `
        <h1>Understanding ngForTrackBy</h1>
        <my-comp></my-comp>
    `,
})
class AppComponent {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, MyComp ,NodeLoggerDirective],
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
