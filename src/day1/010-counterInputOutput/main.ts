import {Component} from '@angular/core'
import {CounterComponent} from './counter.component';

@Component({
    selector: 'app',
    template: `
        <h1>Input and Output</h1>
        <counter [init]="7" (change)="counterChanged($event)"></counter>
    `
})
class AppComponent {
    counterChanged($event){
        console.log('counter value: ' , $event);
    }

}


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, CounterComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

