import {Component, ViewEncapsulation, NgModule} from '@angular/core';
import {DemoStatesComponent} from './demo-states.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <demo-states></demo-states>
    `
})
class AppComponent {}


@NgModule({
  imports: [ BrowserModule],      
  declarations: [ AppComponent, DemoStatesComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
