
import {Component} from '@angular/core'

import {FirstComponent} from './first-component';
import {SecondComponent} from './second-component';
import {MyService} from './my-service';


@Component({
    selector: 'app',
    template: `
            <div>
                <first-component></first-component>
                <second-component></second-component>
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
  declarations: [ AppComponent, FirstComponent, SecondComponent],   
  bootstrap: [ AppComponent ],  
  providers: [ MyService ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
